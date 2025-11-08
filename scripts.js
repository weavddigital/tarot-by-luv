/* Simple carousel functionality for testimonials */
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('active', i === index);
    });
  }

  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  // Automatically cycle through testimonials every 8 seconds
  // This enhances the dynamic experience on the landing page by
  // automatically advancing to the next testimonial without user input.
  const autoInterval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 8000);

  // Pause auto-advance when the user manually navigates the carousel
  prevBtn?.addEventListener('click', () => {
    clearInterval(autoInterval);
  });
  nextBtn?.addEventListener('click', () => {
    clearInterval(autoInterval);
  });
});