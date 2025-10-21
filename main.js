
  const counters = document.querySelectorAll('.counter');
  const speed = 100; // Adjust speed — higher = slower

  const startCounting = (entry) => {
    if (!entry[0].isIntersecting) return;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + '+';
        }
      };
      updateCount();
    });
  };

  // Trigger animation when in viewport
  const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
  observer.observe(document.querySelector('#stats'));

// Contact Form

// Initialize EmailJS
  emailjs.init({
    publicKey: "1NsrIJZbThmT4caiv", // Replace with your own
  });

  // Handle form submission
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_60zagar', 'YOUR_TEMPLAtemplate_osxwy6qTE_ID', this)
      .then(() => {
        status.innerHTML = '<span class="text-success">✅ Message sent successfully!</span>';
        form.reset();
      }, (err) => {
        status.innerHTML = '<span class="text-danger">❌ Failed to send message. Please try again.</span>';
        console.error(err);
      });
  });