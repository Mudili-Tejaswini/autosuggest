document.addEventListener("DOMContentLoaded", () => {
  const randomBtn = document.getElementById("randomBtn");
  const avatarImg = document.getElementById("avatar");
  const nameText = document.getElementById("name");
  const genderText = document.getElementById("gender");

  function getRandomUser() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        const user = data.results[0];
        const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`;

        avatarImg.src = user.picture.large;
        nameText.textContent = fullname;
        genderText.textContent = user.gender;
      })
      .catch(error => {
        console.error("Error fetching random user:", error);
      });
  }

  randomBtn.addEventListener("click", getRandomUser);

  // Optional: load a random user immediately on page load
  getRandomUser();
});
