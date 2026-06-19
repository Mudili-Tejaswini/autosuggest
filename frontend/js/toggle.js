document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const genderText = document.querySelector(".card p");   // first <p> inside .card
  const nameText = document.querySelector(".card h2");    // first <h2> inside .card
  const avatarImg = document.querySelector(".card img");  // first <img> inside .card

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
