/* 
No needed!, But the solution could be the next one without the css :checked.
document.addEventListener("DOMContentLoaded", () => {
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
  allCheckboxes.forEach((checkbox) => {
    const updateClass = () => {
      checkbox.checked
        ? checkbox.parentNode.classList.add("checked")
        : checkbox.parentNode.classList.remove("checked");
    };
    updateClass();
    checkbox.addEventListener("change", updateClass);
  });
});
*/

const itemsWithClass = new Set();
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !itemsWithClass.has(entry.target)) {
        itemsWithClass.add(entry.target);
        const element = entry.target;
        element.classList.add("lazy-background");
        observer.unobserve(element);
      }
    });
  },
  {
    root: null,
    threshold: [1],
  }
);

const labels = document.querySelectorAll(".without-image");
labels.forEach((label) => {
  observer.observe(label);
});
