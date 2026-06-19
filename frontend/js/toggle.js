document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");

  // Select elements without IDs
  const avatarImg = document.querySelector(".card img");
  const nameText = document.querySelector(".card h2");
  const genderText = document.querySelector(".card p");

  toggleBtn.addEventListener("click", () => {
    if (genderText.textContent.trim().toLowerCase() === "male") {
      genderText.textContent = "Female";
      nameText.textContent = "Jane Doe";
      avatarImg.src = "../images/jane.png"; // make sure jane.png exists
    } else {
      genderText.textContent = "Male";
      nameText.textContent = "John Doe";
      avatarImg.src = "../images/john.png";
    }
  });
});
