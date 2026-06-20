function getRandomUser() {
    // Implementation for fetching a random user
    fetch("https://randomuser.me/api/")
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            var user = data.results[0];
            var fullname = user.name.title + " " + user.name.first + " " + user.name.last;

            document.getElementById("user-img").src=user.picture.large;
            document.getElementById("user-name").innerText=fullname;
            document.getElementById("user-gender").innerText=user.gender;
        })
            .catch(function(error) {
                console.error("Error fetching random user:", error);
            });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleBtn").addEventListener("click", getRandomUser);
});
