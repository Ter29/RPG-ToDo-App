import './Dashboard.css';
import { Header } from '../../components/Header/Header';
import { TodayQuestsBlock } from '../../components/DashboardComponents/TodayQuests/TodayQuestsBlock';
import { LongTermGoalsBlock } from '../../components/DashboardComponents/LongTermGoals/LongTermGoalsBlock';
import { HeroBlock } from '../../components/DashboardComponents/HeroBlock/HeroBlock';
import { NavBarBlock } from '../../components/NavBar/NavBarBlock';
export function Dashboard(){
    return (
        <div>
            <Header />
            <main className='dashboard'>
                <section>
                    <TodayQuestsBlock />
                </section>
                <section>
                    <LongTermGoalsBlock />
                </section>
                <section>
                    <HeroBlock />
                </section>
            </main>
            <NavBarBlock />
        </div>
    );
}