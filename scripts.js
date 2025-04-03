   // Mobile Menu Toggle
   const mobileMenuButton = document.getElementById('mobile-menu-button');
   const mobileMenu = document.getElementById('mobile-menu');

   mobileMenuButton.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
   });

   // FAQ Accordion
   const faqQuestions = document.querySelectorAll('.faq-question');

   faqQuestions.forEach(question => {
       question.addEventListener('click', () => {
           const answer = question.nextElementSibling;
           const icon = question.querySelector('i');

           // Toggle answer visibility
           answer.classList.toggle('hidden');

           // Rotate icon
           icon.classList.toggle('rotate-180');

           // Close other answers
           faqQuestions.forEach(q => {
               if (q !== question) {
                   q.nextElementSibling.classList.add('hidden');
                   q.querySelector('i').classList.remove('rotate-180');
               }
           });
       });
   });

   // Back to Top Button
   const backToTopButton = document.getElementById('back-to-top');

   window.addEventListener('scroll', () => {
       if (window.pageYOffset > 300) {
           backToTopButton.classList.remove('hidden');
       } else {
           backToTopButton.classList.add('hidden');
       }
   });

   backToTopButton.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
   });

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           const targetId = this.getAttribute('href');
           if (targetId === '#') return;

           const targetElement = document.querySelector(targetId);
           if (targetElement) {
               targetElement.scrollIntoView({
                   behavior: 'smooth'
               });

               // Close mobile menu if open
               mobileMenu.classList.add('hidden');
           }
       });
   });