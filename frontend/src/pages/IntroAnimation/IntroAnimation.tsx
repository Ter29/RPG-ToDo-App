import { useEffect, type PointerEvent } from 'react';
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

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
  }

  return (
    <main className="intro-animation" onPointerMove={handlePointerMove}>
      <div className="intro-animation__grid" aria-hidden="true" />

      <div className="intro-interface" aria-hidden="true">
        <article className="system-block system-block--quests">
          <span className="system-block__index">01</span>
          <p>Active protocol</p>
          <strong>3 quests synchronized</strong>
          <div className="system-block__line">
            <span />
          </div>
        </article>

        <article className="system-block system-block--xp">
          <span className="system-block__index">02</span>
          <p>Experience matrix</p>
          <strong>2,750 / 4,000 XP</strong>
          <div className="system-block__meter">
            <span />
          </div>
        </article>

        <article className="system-block system-block--streak">
          <span className="system-block__index">03</span>
          <p>Current streak</p>
          <strong>5 days</strong>
          <div className="system-block__days">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i className="is-empty" />
            <i className="is-empty" />
          </div>
        </article>

        <article className="system-block system-block--status">
          <span className="system-block__signal" />
          <p>System status</p>
          <strong>All modules online</strong>
        </article>

        <article className="system-block system-block--rank">
          <span className="system-block__index">04</span>
          <p>Current rank</p>
          <strong>Rising champion</strong>
          <small>Level 12 operative</small>
        </article>

        <div className="interface-coordinate interface-coordinate--left">
          48.8566 N / 2.3522 E
        </div>
        <div className="interface-coordinate interface-coordinate--right">
          ASC-12 / SESSION ACTIVE
        </div>
      </div>

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
