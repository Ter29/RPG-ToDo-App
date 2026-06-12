type IntroAnimationProps = {
  onComplete: () => void;
};

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  return (
    <div className="intro" onAnimationEnd={onComplete}>
      IntroAnimation
    </div>
  );
}
