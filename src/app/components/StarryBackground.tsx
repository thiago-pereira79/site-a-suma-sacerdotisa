interface StarryBackgroundProps {
  opacity?: number;
  showStars?: boolean;
}

export function StarryBackground({ opacity = 0.08, showStars = true }: StarryBackgroundProps) {
  return (
    <>
      {/* Deep Purple Gradient Base with Radial Center Glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, #1A1528 0%, #0D0A1A 50%, #080614 100%)
          `
        }}
      ></div>
      
      {showStars && (
        <>
          {/* Star Layer 1 - Ultra Fine Cosmic Dust (Highest Priority - Many tiny stars) */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(0.4px 0.4px at 5% 2%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 12% 5%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 19% 1%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 27% 7%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 34% 3%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 41% 9%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 48% 4%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 56% 8%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 63% 2%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 71% 6%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 78% 1%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 85% 5%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 92% 9%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 97% 3%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 3% 14%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 9% 18%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 16% 12%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 24% 16%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 31% 11%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 38% 19%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 46% 13%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 53% 17%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 60% 14%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 68% 11%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 75% 18%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 82% 15%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 89% 12%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 95% 16%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 7% 23%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 14% 27%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 21% 21%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 29% 26%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 36% 24%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 43% 29%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 51% 22%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 58% 28%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 65% 25%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 73% 21%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 80% 27%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 87% 23%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 94% 29%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 99% 24%, rgba(255, 255, 255, 0.2), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 1.6,
            }}
          ></div>

          {/* Star Layer 2 - More Cosmic Dust (Middle vertical area) */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(0.4px 0.4px at 4% 32%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 11% 36%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 18% 34%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 26% 38%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 33% 31%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 40% 37%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 47% 33%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 55% 39%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 62% 35%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 69% 32%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 77% 38%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 84% 34%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 91% 36%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 96% 31%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 6% 43%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 13% 47%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 20% 41%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 28% 46%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 35% 44%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 42% 49%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 50% 42%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 57% 48%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 64% 45%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 72% 41%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 79% 47%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 86% 43%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 93% 49%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 98% 44%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 8% 52%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 15% 56%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 22% 54%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 30% 58%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 37% 51%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 44% 57%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 52% 53%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 59% 59%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 66% 55%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 74% 52%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 81% 58%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 88% 54%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 95% 56%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 2% 51%, rgba(255, 255, 255, 0.2), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 1.6,
            }}
          ></div>

          {/* Star Layer 3 - Bottom Cosmic Dust */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(0.4px 0.4px at 3% 62%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 10% 67%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 17% 64%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 25% 69%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 32% 61%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 39% 68%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 46% 63%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 54% 66%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 61% 62%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 68% 69%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 76% 65%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 83% 61%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 90% 67%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 97% 64%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 5% 74%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 12% 78%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 19% 72%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 27% 77%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 34% 73%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 41% 79%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 49% 71%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 56% 76%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 63% 74%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 71% 78%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 78% 72%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 85% 77%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 92% 73%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 99% 79%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 7% 83%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 14% 87%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 21% 84%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 29% 89%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 36% 81%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 43% 88%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 51% 85%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 58% 82%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 65% 86%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 73% 91%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 80% 83%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 87% 89%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 94% 84%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 2% 81%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 9% 94%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 16% 96%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 24% 92%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 31% 98%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 38% 91%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 46% 95%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 53% 93%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 60% 97%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 68% 99%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 75% 94%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 82% 96%, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(0.4px 0.4px at 89% 92%, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(0.4px 0.4px at 96% 98%, rgba(255, 255, 255, 0.25), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 1.6,
            }}
          ></div>

          {/* Star Layer 4 - Small Stars with Golden Accents */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(0.8px 0.8px at 8% 4%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 22% 11%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 37% 7%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 51% 14%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 66% 9%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 81% 16%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 93% 6%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 12% 23%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 28% 29%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.7px 0.7px at 44% 19%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 59% 26%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 74% 21%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 88% 27%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 97% 24%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 6% 36%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 19% 42%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 35% 38%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.7px 0.7px at 49% 45%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 63% 33%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 77% 39%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 91% 44%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 14% 52%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.7px 0.7px at 26% 58%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 41% 54%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 56% 61%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 70% 47%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 84% 56%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 96% 51%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 9% 68%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 23% 73%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 38% 66%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 52% 71%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 67% 78%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 81% 64%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 94% 69%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 11% 82%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.7px 0.7px at 25% 88%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 40% 84%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.8px 0.8px at 54% 91%, rgba(255, 255, 255, 0.45), transparent),
                radial-gradient(0.8px 0.8px at 69% 87%, rgba(255, 255, 255, 0.5), transparent),
                radial-gradient(0.7px 0.7px at 83% 93%, rgba(212, 175, 55, 0.3), transparent),
                radial-gradient(0.8px 0.8px at 95% 89%, rgba(255, 255, 255, 0.45), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 1.3,
            }}
          ></div>

          {/* Star Layer 5 - Medium Stars (Few and Strategic) */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(1.2px 1.2px at 15% 8%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 42% 15%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 73% 12%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 88% 19%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 24% 34%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 58% 41%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 79% 37%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 11% 56%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 47% 63%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 86% 59%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 32% 78%, rgba(255, 255, 255, 0.6), transparent),
                radial-gradient(1.2px 1.2px at 61% 84%, rgba(255, 255, 255, 0.55), transparent),
                radial-gradient(1.2px 1.2px at 92% 81%, rgba(255, 255, 255, 0.6), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 1.0,
            }}
          ></div>

          {/* Star Layer 6 - Rare Golden Medium Stars */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(1px 1px at 28% 17%, rgba(212, 175, 55, 0.4), transparent),
                radial-gradient(1px 1px at 64% 28%, rgba(212, 175, 55, 0.35), transparent),
                radial-gradient(1px 1px at 19% 49%, rgba(212, 175, 55, 0.4), transparent),
                radial-gradient(1px 1px at 76% 56%, rgba(212, 175, 55, 0.35), transparent),
                radial-gradient(1px 1px at 43% 75%, rgba(212, 175, 55, 0.4), transparent),
                radial-gradient(1px 1px at 89% 92%, rgba(212, 175, 55, 0.35), transparent)
              `,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: opacity * 0.85,
            }}
          ></div>

          {/* Twinkling stars - Animated for depth */}
          <div className="absolute top-[3%] left-[18%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '2.8s' }}></div>
          <div className="absolute top-[9%] left-[67%] w-0.5 h-0.5 bg-white/55 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.4)]" style={{ animationDuration: '3.1s', animationDelay: '0.4s' }}></div>
          <div className="absolute top-[14%] left-[41%] w-0.5 h-0.5 bg-[#D4AF37]/45 rounded-full animate-pulse shadow-[0_0_3px_rgba(212,175,55,0.4)]" style={{ animationDuration: '3.4s', animationDelay: '0.7s' }}></div>
          <div className="absolute top-[22%] left-[84%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '3s', animationDelay: '0.2s' }}></div>
          <div className="absolute top-[29%] left-[12%] w-0.5 h-0.5 bg-white/55 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.4)]" style={{ animationDuration: '2.9s', animationDelay: '0.5s' }}></div>
          <div className="absolute top-[36%] left-[55%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }}></div>
          <div className="absolute top-[44%] left-[93%] w-0.5 h-0.5 bg-[#D4AF37]/45 rounded-full animate-pulse shadow-[0_0_3px_rgba(212,175,55,0.4)]" style={{ animationDuration: '3.3s', animationDelay: '0.3s' }}></div>
          <div className="absolute top-[51%] left-[28%] w-0.5 h-0.5 bg-white/55 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.4)]" style={{ animationDuration: '2.7s', animationDelay: '0.6s' }}></div>
          <div className="absolute top-[58%] left-[71%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '3.1s', animationDelay: '0.9s' }}></div>
          <div className="absolute top-[66%] left-[7%] w-0.5 h-0.5 bg-white/55 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.4)]" style={{ animationDuration: '2.8s', animationDelay: '0.1s' }}></div>
          <div className="absolute top-[73%] left-[49%] w-0.5 h-0.5 bg-[#D4AF37]/45 rounded-full animate-pulse shadow-[0_0_3px_rgba(212,175,55,0.4)]" style={{ animationDuration: '3.4s', animationDelay: '0.4s' }}></div>
          <div className="absolute top-[81%] left-[88%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '3s', animationDelay: '0.7s' }}></div>
          <div className="absolute top-[89%] left-[34%] w-0.5 h-0.5 bg-white/55 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.4)]" style={{ animationDuration: '2.9s', animationDelay: '0.2s' }}></div>
          <div className="absolute top-[95%] left-[62%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse shadow-[0_0_2px_rgba(255,255,255,0.5)]" style={{ animationDuration: '3.2s', animationDelay: '0.5s' }}></div>
        </>
      )}
      
      {/* Subtle Dark Purple Vignette for Depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(8, 6, 20, 0.4) 100%)
          `
        }}
      ></div>
    </>
  );
}
