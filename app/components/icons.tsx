import { ThemeChoice } from "../theme";

type IconProps = {
  size?: number;
};

function ShortcutIcon({ src, size = 32 }: IconProps & { src: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <image href={src} width="32" height="32" />
    </svg>
  );
}

export function QuizIcon({ size = 32 }: IconProps) {
  return <ShortcutIcon src="/quiz.png" size={size} />;
}

export function CapitalistIcon({ size = 32 }: IconProps) {
  return <ShortcutIcon src="/capitalist.png" size={size} />;
}

export function ResearchIcon({ size = 32 }: IconProps) {
  return <ShortcutIcon src="/research.png" size={size} />;
}

export function ThemeIcon({ theme }: { theme: ThemeChoice }) {
  if (theme === "dark") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" fill="#1d4e8f" />
        <circle cx="14" cy="16" r="7" fill="#f6e7a8" />
        <circle cx="17.5" cy="14" r="6" fill="#1d4e8f" />
      </svg>
    );
  }

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" fill="#1d4e8f" />
      <circle cx="16" cy="16" r="5" fill="#f6d34a" />
      <g fill="#f6d34a">
        <rect x="15" y="4" width="2" height="4" />
        <rect x="15" y="24" width="2" height="4" />
        <rect x="4" y="15" width="4" height="2" />
        <rect x="24" y="15" width="4" height="2" />
        <rect x="7" y="7" width="3" height="2" transform="rotate(-45 8.5 8)" />
        <rect x="22" y="7" width="3" height="2" transform="rotate(45 23.5 8)" />
        <rect x="7" y="23" width="3" height="2" transform="rotate(45 8.5 24)" />
        <rect
          x="22"
          y="23"
          width="3"
          height="2"
          transform="rotate(-45 23.5 24)"
        />
      </g>
    </svg>
  );
}
