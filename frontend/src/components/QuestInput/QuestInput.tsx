import { useState } from 'react';
import { createTask } from '../../services/taskService';
import './QuestInput.css'
import arrowIcon from './img/arrow-up-right-svgrepo-com.svg'

const difficultyOptions = [
  { label: 'Easy', xp: 25 },
  { label: 'Medium', xp: 50 },
  { label: 'Hard', xp: 100 },
];

export function QuestInput() {
  const [title, setTitle] = useState('');
  const [difficultyXp, setDifficultyXp] = useState(25);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  function resetQuestInput() {
    setTitle('');
    setDifficultyXp(25);
    setIsExpanded(false);
    setIsCreated(false);
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const nextTitle = event.target.value;

    setTitle(nextTitle);

    if (isExpanded && !nextTitle.trim()) {
      resetQuestInput();
    }
  }

  function handleStartQuest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    setTitle(trimmedTitle);
    setIsExpanded(true);
    setIsCreated(false);
  }

  async function handleCreateQuest() {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      resetQuestInput();
      return;
    }

    await createTask({
      title: trimmedTitle,
      xp: difficultyXp,
      completed: false,
    });

    setIsCreated(true);

    window.setTimeout(() => {
      resetQuestInput();
    }, 1200);
  }

  return (
    <section className={`quest-input-wrapper ${isExpanded ? 'is-expanded' : ''}`}>
      <form className="quest-modal" onSubmit={handleStartQuest}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your quest..."
            className="quest-input"
            value={title}
            onChange={handleTitleChange}
          />
          <button
            className="quest-button"
            type={isExpanded ? 'button' : 'submit'}
            aria-label={isExpanded ? 'Back to quest input' : 'Submit quest title'}
            onClick={isExpanded ? resetQuestInput : undefined}
          >
            {isExpanded ? <span aria-hidden="true">←</span> : <img src={arrowIcon} alt="" />}
          </button>
        </div>

        {isExpanded && (
          <div className="quest-details">
            <p className="quest-status">{isCreated ? 'Quest Created' : 'Quest Setup'}</p>

            <div className="quest-summary">
              <span className="quest-label">Title:</span>
              <strong>{title || 'New quest'}</strong>
            </div>

            <div className="difficulty-group">
              <span className="quest-label">Difficulty:</span>

              {difficultyOptions.map((option) => (
                <label className="difficulty-option" key={option.label}>
                  <input
                    type="radio"
                    name="difficulty"
                    checked={difficultyXp === option.xp}
                    onChange={() => setDifficultyXp(option.xp)}
                  />
                  <span>{option.label} (+{option.xp} XP)</span>
                </label>
              ))}
            </div>

            <button className="create-quest-button" type="button" onClick={handleCreateQuest}>
              Create Quest
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
