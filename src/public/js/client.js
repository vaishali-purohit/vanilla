// client-side js
// run by the browser each time your view template is loaded

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("I'm connected");

  let wishForm = document.getElementById("wish-form");

  let usernameBox = document.getElementById("username");
  let userwishBox = document.getElementById("userwish");

  usernameBox.addEventListener("input", removeNameError);
  userwishBox.addEventListener("input", removeWishError);

  wishForm.addEventListener("submit", addAnWish);
});

function addAnWish() {
  event.preventDefault();
  let userName = document.getElementById("username").value;
  console.log(userName);
  let userWish = document.getElementById("userwish").value;
  console.log(userWish);

  if (!userName) {
    document.getElementById("userError").style.display = "block";
  }

  if (!userWish) {
    document.getElementById("wishError").style.display = "block";
  }

  if (userName && userWish) {
    document.getElementById("submit-letter").addEventListener("click", redirectToSucess);
  }
}

function removeNameError() {
  event.preventDefault();
  document.getElementById("userError").style.display = "none";
}

function removeWishError() {
  event.preventDefault();
  document.getElementById("wishError").style.display = "none";
}

function redirectToSucess() {
  let url = "/success";
  window.location.href(url);
}
