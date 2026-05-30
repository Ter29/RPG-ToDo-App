import './QuestInput.css'
import arrowIcon from './img/arrow-up-right-svgrepo-com.svg'

export function QuestInput() {
  return (
    <section className="quest-input-wrapper">
      <div className="input-container">
        <input type="text" placeholder="Enter your quest..." className="quest-input" />
        <button className="quest-button"><img src={arrowIcon} alt="Submit" /></button>
       </div>
    </section>
  );
}