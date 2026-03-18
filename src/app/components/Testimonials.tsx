import { useEffect, useState } from "react";
import { supabase } from "../supabase";

const ADMIN_EMAIL = "sacerdotisasuma@gmail.com";
const MESSAGE_MAX_LENGTH = 280;
const SPAM_BLOCK_SECONDS = 10;

type Testimonial = {
  id: string;
  nome: string;
  mensagem: string;
  created_at: string;
};

type Notice = {
  type: "success" | "error";
  message: string;
} | null;

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [adminOpen, setAdminOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [session, setSession] = useState<any>(null);

  const [notice, setNotice] = useState<Notice>(null);
  const [animatedIds, setAnimatedIds] = useState<string[]>([]);
  const [cooldown, setCooldown] = useState(0);

  const isAdmin = session?.user?.email === ADMIN_EMAIL;
  const remainingCharacters = MESSAGE_MAX_LENGTH - message.length;

  function showNotice(type: "success" | "error", message: string) {
    setNotice({ type, message });
  }

  useEffect(() => {
    if (!notice) return;

    const timer = setTimeout(() => {
      setNotice(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    const savedTimestamp = localStorage.getItem("testimonial_last_submit_at");
    if (!savedTimestamp) return;

    const lastSubmit = Number(savedTimestamp);
    const now = Date.now();
    const secondsLeft = Math.ceil((lastSubmit + SPAM_BLOCK_SECONDS * 1000 - now) / 1000);

    if (secondsLeft > 0) {
      setCooldown(secondsLeft);
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  async function loadTestimonials() {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Erro ao carregar depoimentos:", error);
      showNotice("error", "Não foi possível carregar os depoimentos.");
      return;
    }

    if (data) {
      const previousIds = new Set(testimonials.map((item) => item.id));
      const newIds = data
        .filter((item) => !previousIds.has(item.id))
        .map((item) => item.id);

      if (newIds.length > 0) {
        setAnimatedIds((prev) => [...prev, ...newIds]);

        setTimeout(() => {
          setAnimatedIds((prev) => prev.filter((id) => !newIds.includes(id)));
        }, 900);
      }

      setTestimonials(data);
    }
  }

  useEffect(() => {
    loadTestimonials();

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    const channel = supabase
      .channel("testimonials-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "testimonials" },
        () => {
          loadTestimonials();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, []);

  async function handlePublish(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      showNotice("error", "Preencha seu nome e sua mensagem.");
      return;
    }

    if (message.trim().length < 10) {
      showNotice("error", "A mensagem precisa ter pelo menos 10 caracteres.");
      return;
    }

    if (message.length > MESSAGE_MAX_LENGTH) {
      showNotice("error", `A mensagem deve ter no máximo ${MESSAGE_MAX_LENGTH} caracteres.`);
      return;
    }

    if (cooldown > 0) {
      showNotice(
        "error",
        `Espere ${cooldown}s antes de enviar outro depoimento.`
      );
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("testimonials").insert([
      {
        nome: name.trim(),
        mensagem: message.trim(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Erro ao publicar depoimento:", error);
      showNotice("error", "Não foi possível publicar o depoimento.");
      return;
    }

    const now = Date.now();
    localStorage.setItem("testimonial_last_submit_at", String(now));
    setCooldown(SPAM_BLOCK_SECONDS);

    setName("");
    setMessage("");
    showNotice("success", "Depoimento publicado com sucesso!");
  }

  async function handleAdminLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!adminEmail.trim() || !adminPassword.trim()) {
      showNotice("error", "Preencha e-mail e senha.");
      return;
    }

    setAdminLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: adminEmail.trim(),
      password: adminPassword,
    });

    setAdminLoading(false);

    if (error) {
      console.error("Erro no login:", error);
      showNotice("error", "E-mail ou senha inválidos.");
      return;
    }

    setAdminEmail("");
    setAdminPassword("");
    setAdminOpen(false);
    showNotice("success", "Área restrita acessada com sucesso.");
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    showNotice("success", "Você saiu da área restrita.");
  }

  async function handleDelete(id: string) {
    if (!isAdmin) {
      showNotice("error", "Você não tem permissão para excluir depoimentos.");
      return;
    }

    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este depoimento?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("testimonials").delete().eq("id", id);

    if (error) {
      console.error("Erro ao excluir depoimento:", error);
      showNotice("error", `Erro ao excluir: ${error.message}`);
      return;
    }

    showNotice("success", "Depoimento excluído com sucesso.");
  }

  return (
    <section id="depoimentos" className="w-full px-6 py-20 text-white">
      <style>
        {`
          @keyframes fadeInUpSoft {
            0% {
              opacity: 0;
              transform: translateY(14px) scale(0.985);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes toastSlideIn {
            0% {
              opacity: 0;
              transform: translateY(-12px) translateX(12px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }

          @keyframes spinSoft {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      {notice && (
        <div className="fixed right-6 top-6 z-[9999] max-w-sm">
          <div
            className={`rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-md ${
              notice.type === "success"
                ? "border-yellow-500/40 bg-[#22163a]/95 text-yellow-100"
                : "border-red-500/40 bg-[#2a1220]/95 text-red-100"
            }`}
            style={{ animation: "toastSlideIn 0.28s ease-out" }}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${
                  notice.type === "success"
                    ? "bg-yellow-400 text-black"
                    : "bg-red-400 text-black"
                }`}
              >
                {notice.type === "success" ? "✓" : "!"}
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium">
                  {notice.type === "success" ? "Tudo certo" : "Ops"}
                </p>
                <p className="mt-1 text-sm opacity-90">{notice.message}</p>
              </div>

              <button
                type="button"
                onClick={() => setNotice(null)}
                className="text-sm opacity-70 transition hover:opacity-100"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-serif text-5xl text-yellow-400">
          Depoimentos
        </h2>

        <p className="mb-12 text-center text-lg text-white/80">
          Compartilhe sua experiência com a consulta
        </p>

        <div className="mb-6 flex justify-end">
          {!session ? (
            <button
              type="button"
              onClick={() => setAdminOpen((prev) => !prev)}
              className="rounded-full border border-yellow-400 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Área Restrita
            </button>
          ) : isAdmin ? (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-red-400 px-4 py-2 text-sm text-red-400 transition hover:bg-red-400 hover:text-black"
            >
              Sair da área restrita
            </button>
          ) : null}
        </div>

        {adminOpen && !session && (
          <form
            onSubmit={handleAdminLogin}
            className="mb-8 rounded-[32px] border border-yellow-500/40 bg-white/5 p-8 shadow-[0_0_40px_rgba(234,179,8,0.08)]"
          >
            <h3 className="mb-6 font-serif text-3xl text-yellow-400">
              Área Restrita
            </h3>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-white/90">
                E-mail
              </label>
              <input
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="w-full rounded-2xl border border-yellow-500/30 bg-black/30 px-4 py-4 text-white placeholder:text-white/40 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-white/90">
                Senha
              </label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full rounded-2xl border border-yellow-500/30 bg-black/30 px-4 py-4 text-white placeholder:text-white/40 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={adminLoading}
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {adminLoading && (
                <span
                  className="inline-block h-4 w-4 rounded-full border-2 border-black/30 border-t-black"
                  style={{ animation: "spinSoft 0.8s linear infinite" }}
                />
              )}
              {adminLoading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        )}

        <form
          onSubmit={handlePublish}
          className="mb-12 rounded-[32px] border border-yellow-500/40 bg-white/5 p-8 shadow-[0_0_40px_rgba(234,179,8,0.08)]"
        >
          <h3 className="mb-6 text-center font-serif text-3xl text-orange-300">
            Deixe seu Depoimento
          </h3>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-white/90">
              Seu Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full rounded-2xl border border-yellow-500/30 bg-black/30 px-4 py-4 text-white placeholder:text-white/40 outline-none"
            />
          </div>

          <div className="mb-2">
            <label className="mb-2 block text-sm font-medium text-white/90">
              Mensagem
            </label>
            <textarea
              value={message}
              onChange={(e) =>
                setMessage(e.target.value.slice(0, MESSAGE_MAX_LENGTH))
              }
              placeholder="Compartilhe sua experiência"
              rows={5}
              className="w-full rounded-2xl border border-yellow-500/30 bg-black/30 px-4 py-4 text-white placeholder:text-white/40 outline-none"
            />
          </div>

          <div className="mb-6 flex items-center justify-between text-sm">
            <span className="text-white/55">
              Máximo de {MESSAGE_MAX_LENGTH} caracteres
            </span>
            <span
              className={`font-medium ${
                remainingCharacters <= 30
                  ? "text-orange-300"
                  : "text-white/70"
              }`}
            >
              {message.length}/{MESSAGE_MAX_LENGTH}
            </span>
          </div>

          {cooldown > 0 && (
            <div className="mb-4 rounded-2xl border border-yellow-500/20 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-100">
              Aguarde {cooldown}s para publicar outro depoimento.
            </div>
          )}

          <button
            type="submit"
            disabled={loading || cooldown > 0}
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-4 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading && (
              <span
                className="inline-block h-5 w-5 rounded-full border-2 border-black/30 border-t-black"
                style={{ animation: "spinSoft 0.8s linear infinite" }}
              />
            )}
            {loading
              ? "Publicando..."
              : cooldown > 0
              ? `Aguarde ${cooldown}s`
              : "Publicar Depoimento"}
          </button>
        </form>

        {testimonials.length === 0 ? (
          <div className="rounded-3xl border border-yellow-500/20 bg-white/5 px-6 py-10 text-center text-white/70">
            Seja o primeiro a compartilhar sua experiência
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-yellow-500/30 bg-white/5 p-6 shadow-[0_0_30px_rgba(234,179,8,0.06)]"
                style={{
                  animation: animatedIds.includes(item.id)
                    ? "fadeInUpSoft 0.45s ease-out"
                    : undefined,
                }}
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm text-yellow-300">✦</span>
                      <h4 className="text-lg font-semibold text-yellow-400">
                        {item.nome}
                      </h4>
                    </div>
                    <p className="text-xs text-white/50">
                      {new Date(item.created_at).toLocaleDateString("pt-BR")}
                    </p>
                  </div>

                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="rounded-full border border-red-400 px-3 py-1 text-xs text-red-400 transition hover:bg-red-400 hover:text-black"
                    >
                      Excluir
                    </button>
                  )}
                </div>

                <p className="whitespace-pre-line text-white/85">
                  {item.mensagem}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;