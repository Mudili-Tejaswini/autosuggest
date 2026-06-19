document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const genderText = document.getElementById("gender");
  const nameText = document.getElementById("name");
  const avatarImg = document.getElementById("avatar");

  toggleBtn.addEventListener("click", () => {
    if (genderText.textContent.toLowerCase() === "male") {
      // Switch to Female profile
      genderText.textContent = "Female";
      nameText.textContent = "Jane Doe";
      avatarImg.src = "../images/jane.png"; // <-- make sure you have jane.png in your images folder
    } else {
      // Switch back to Male profile
      genderText.textContent = "Male";
      nameText.textContent = "John Doe";
      avatarImg.src = "../images/john.png";
    }
  });
});
