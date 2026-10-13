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
