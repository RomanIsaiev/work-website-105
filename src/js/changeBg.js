// const box = document.querySelector('.tariffs');
// const wrapper = document.querySelector('.bg-wrapper');

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         wrapper.classList.add('visible');
//       } else {
//         wrapper.classList.remove('visible');
//       }
//     });
//   },
//   {
//     threshold: 0.2, // элемент виден хотя бы на 10%
//   }
// );

// observer.observe(box);

// const changeBgElements = document.querySelectorAll('.changeBg');
// const wrapper = document.querySelector('.bg-wrapper');

// let visibleCount = 0;

// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         visibleCount++;
//       } else {
//         visibleCount--;
//       }

//       if (visibleCount > 0) {
//         wrapper.classList.add('visible');
//       } else {
//         wrapper.classList.remove('visible');
//       }
//     });
//   },
//   {
//     threshold: 0,
//   }
// );

// changeBgElements.forEach(el => observer.observe(el));

// **

const changeBgElements = document.querySelectorAll('.changeBg');
const wrapper = document.querySelector('.bg-wrapper');

const visibleElements = new Set();

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleElements.add(entry.target);
      } else {
        visibleElements.delete(entry.target);
      }

      if (visibleElements.size > 0) {
        wrapper.classList.add('visible');
      } else {
        wrapper.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

changeBgElements.forEach(el => observer.observe(el));
