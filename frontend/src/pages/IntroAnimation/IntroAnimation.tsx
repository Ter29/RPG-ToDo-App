import { useEffect } from 'react';
import LaserFlow from '@/components/LaserFlow/LaserFlow';
import './IntroAnimation.css';

type IntroAnimationProps = {
  onComplete: () => void;
};

const INTRO_DURATION_MS = 14000;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    const timerId = window.setTimeout(onComplete, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [onComplete]);

  return (
    <main className="intro-animation">
      <LaserFlow
        className="intro-animation__laser"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        color="#9f67ff"
        horizontalBeamOffset={0}
        verticalBeamOffset={0}
        horizontalSizing={0.7}
        verticalSizing={2}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />

      <div className="intro-animation__content">
        <br></br>
        <h1>ASCEND</h1>
        <p className="intro-animation__eyebrow">Quest system online</p>
      </div>

      <button
        className="intro-animation__skip"
        type="button"
        onClick={onComplete}
      >
        Skip intro
      </button>
    </main>
  );
}
