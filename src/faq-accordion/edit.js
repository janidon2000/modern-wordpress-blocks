import { __ } from '@wordpress/i18n';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { items } = attributes;

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setAttributes({ items: newItems });
  };

  const toggleOpen = (index) => {
    const newItems = [...items];
    newItems[index].open = !newItems[index].open;
    setAttributes({ items: newItems });
  };

  const addItem = () => {
    setAttributes({
      items: [...items, { question: "New Question?", answer: "Answer goes here...", open: false }],
    });
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setAttributes({ items: newItems });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('FAQ Accordion Settings')}>
          <Button variant="secondary" onClick={addItem}>
            {__('Add FAQ')}
          </Button>
        </PanelBody>
      </InspectorControls>

      <div className="mwb-faq-list">
        {items.map((item, index) => (
          <div key={index} className={`mwb-faq-item ${item.open ? 'is-open' : ''}`}>
            <button
              className="mwb-faq-question"
              aria-expanded={item.open}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              onClick={() => toggleOpen(index)}
            >
              <RichText
                tagName="span"
                value={item.question}
                onChange={(val) => updateItem(index, 'question', val)}
                placeholder={__('Question…')}
              />
              <span className="mwb-faq-icon">{item.open ? '−' : '+'}</span>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="mwb-faq-answer"
              hidden={!item.open}
            >
              <RichText
                tagName="p"
                value={item.answer}
                onChange={(val) => updateItem(index, 'answer', val)}
                placeholder={__('Answer…')}
              />
            </div>
            <Button variant="link" isDestructive onClick={() => removeItem(index)}>
              {__('Remove')}
            </Button>
          </div>
        ))}
      </div>
    </Fragment>
  );
}