import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { items } = attributes;

  return (
    <div className="mwb-faq-list">
      {items.map((item, index) => {
        // Always render closed by default
        const isOpen = item.open ? true : false;
        return (
          <div key={index} className={`mwb-faq-item${isOpen ? ' is-open' : ''}`}>
            <button
              className="mwb-faq-question"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              type="button"
            >
              <RichText.Content tagName="span" value={item.question} />
              <span className="mwb-faq-icon">{isOpen ? '−' : '+'}</span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className="mwb-faq-answer"
              role="region"
              aria-labelledby={`faq-question-${index}`}
              hidden={!isOpen}
            >
              <RichText.Content tagName="p" value={item.answer} />
            </div>
          </div>
        );
      })}
    </div>
  );
}