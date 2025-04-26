document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('move-in');
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(
      '.contact-info h3, .contact-info p, .contact-details, .contact-form'
    )
    .forEach((el) => {
      el.classList.remove('move-in');
      observer.observe(el);
    });
});
