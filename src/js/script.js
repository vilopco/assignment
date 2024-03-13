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
