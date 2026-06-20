document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn");
  const avatarImg = document.querySelector(".card img");
  const nameText = document.querySelector(".card h2");
  const genderText = document.querySelector(".card p");

  toggleBtn.addEventListener("click", () => {
    if (genderText.textContent.trim().toLowerCase() === "male") {
      genderText.textContent = "Female";
      nameText.textContent = "Jane Doe";
      avatarImg.src = "../images/jane.png"; 
    } else {
      genderText.textContent = "Male";
      nameText.textContent = "John Doe";
      avatarImg.src = "../images/john.png";
    }
  });
});

//var curid =0;
//function toggle() {
  //curid = (curid + 1) % 2;
  //toggle the rendered user details 
  //image
  //var avatar = user[curid]
  //document.getElementById("avatar").src = avatar.image;
  //to do :update for name and gender !
//  document.getElementById("avatarname").innerText = avatar.name;
  //document.getElementById("avatargender").innerText = avatar.gender;
