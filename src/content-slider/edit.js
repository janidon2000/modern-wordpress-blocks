import { __ } from '@wordpress/i18n';
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { useState, Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { slides, activeIndex } = attributes;
  const [current, setCurrent] = useState(activeIndex || 0);

  const updateSlide = (i, field, value) => {
    const newSlides = [...slides];
    newSlides[i][field] = value;
    setAttributes({ slides: newSlides });
  };

  const addSlide = () => {
    setAttributes({
      slides: [...slides, { title: 'New Slide', text: 'Description…', imageUrl: '', imageAlt: '' }],
    });
  };

  const removeSlide = (i) => {
    const newSlides = [...slides];
    newSlides.splice(i, 1);
    setAttributes({ slides: newSlides });
    if (current >= newSlides.length) setCurrent(Math.max(0, newSlides.length - 1));
  };

  const goPrev = () => {
    const val = (current - 1 + slides.length) % slides.length;
    setCurrent(val);
    setAttributes({ activeIndex: val });
  };
  const goNext = () => {
    const val = (current + 1) % slides.length;
    setCurrent(val);
    setAttributes({ activeIndex: val });
  };

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title="Slider Settings">
          <Button onClick={addSlide} variant="secondary">{__('Add Slide')}</Button>
        </PanelBody>
      </InspectorControls>

      <div className="mwb-slider">
        <div className="mwb-slider__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div className="mwb-slide" key={i}>
              {slide.imageUrl ? (
                <img src={slide.imageUrl} alt={slide.imageAlt} />
              ) : (
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) => {
                      updateSlide(i, 'imageUrl', media.url);
                      updateSlide(i, 'imageAlt', media.alt || '');
                    }}
                    allowedTypes={['image']}
                    render={({ open }) => (
                      <Button onClick={open} variant="secondary">
                        {__('Upload Image')}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              )}

              <RichText
                tagName="h3"
                className="slide-title"
                value={slide.title}
                onChange={(val) => updateSlide(i, 'title', val)}
                placeholder="Slide Title…"
              />
              <RichText
                tagName="p"
                className="slide-text"
                value={slide.text}
                onChange={(val) => updateSlide(i, 'text', val)}
                placeholder="Slide description…"
              />

              <Button variant="link" isDestructive onClick={() => removeSlide(i)}>
                {__('Remove')}
              </Button>
            </div>
          ))}
        </div>

        <div className="mwb-slider__controls">
          <Button className="mwb-prev" onClick={goPrev}>‹</Button>
          <Button className="mwb-next" onClick={goNext}>›</Button>
        </div>
      </div>
    </Fragment>
  );
}