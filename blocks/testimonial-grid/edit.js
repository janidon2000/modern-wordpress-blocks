import { useBlockProps, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { testimonials = [] } = attributes;

  const addTestimonial = () => {
    const newTestimonials = [...testimonials, { name: '', quote: '', imageUrl: '' }];
    setAttributes({ testimonials: newTestimonials });
  };

  const updateTestimonial = (index, field, value) => {
    const updated = testimonials.map((t, i) => (i === index ? { ...t, [field]: value } : t));
    setAttributes({ testimonials: updated });
  };

  return (
    <div {...useBlockProps()}>
      <h3>Testimonial Grid</h3>
      {testimonials.map((t, i) => (
        <div key={i} className="testimonial-item">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(media) => updateTestimonial(i, 'imageUrl', media.url)}
              allowedTypes={['image']}
              render={({ open }) => (
                <Button onClick={open}>{t.imageUrl ? 'Change Image' : 'Upload Image'}</Button>
              )}
            />
          </MediaUploadCheck>

          <RichText
            tagName="h4"
            placeholder="Name"
            value={t.name}
            onChange={(value) => updateTestimonial(i, 'name', value)}
          />
          <RichText
            tagName="p"
            placeholder="Quote"
            value={t.quote}
            onChange={(value) => updateTestimonial(i, 'quote', value)}
          />
        </div>
      ))}
      <Button isPrimary onClick={addTestimonial}>
        Add Testimonial
      </Button>
    </div>
  );
}
