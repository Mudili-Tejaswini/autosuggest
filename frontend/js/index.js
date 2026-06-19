//alert("hello from JS");

console.log("hello from JS:");
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const genderText = document.getElementById("gender");

  toggleBtn.addEventListener("click", () => {
    if (genderText.textContent.toLowerCase() === "male") {
      genderText.textContent = "Female";
    } else {
      genderText.textContent = "Male";
    }
  });
});
