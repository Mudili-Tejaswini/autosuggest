ddocument.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const genderText = document.getElementById("gender");
  const nameText = document.getElementById("name");
  const avatarImg = document.getElementById("avatar");

  toggleBtn.addEventListener("click", () => {
    if (genderText.textContent.toLowerCase() === "male") {
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
