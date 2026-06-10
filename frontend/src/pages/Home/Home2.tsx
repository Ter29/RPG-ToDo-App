import { GeometricParticles } from '../../components/GeometricParticles/GeometricParticles';
import { QuestInput } from '../../components/QuestInput/QuestInput';
import './Home.css';

export function Home2() {
  return (
    <main className="home-page">
      <GeometricParticles />

      <section className="home-content">
        <h1 className="home-title">What is on the agenda?</h1>

        <QuestInput />
      </section>
    </main>
  );
}
