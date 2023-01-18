// client-side js
// run by the browser each time your view template is loaded

import { navigateTo } from "./index.js";

const addAnWish = (event) => {
  event.preventDefault();
  let userName = document.getElementById("username").value;
  console.log(userName);
  let userWish = document.getElementById("userwish").value;
  console.log(userWish);

  if (userName && userWish) {
    return redirectToSuccess(userName, userWish);
  }

  if (!userName) {
    document.getElementById("userError").style.display = "block";
  }
  if (!userWish) {
    document.getElementById("wishError").style.display = "block";
  }

  return;
};

const WishRequest = async ({ username, userWish }) => {
  console.log(username, userWish);
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/users/register-request",
      { username, userWish },
      config
    );
    console.log(response);

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const redirectToSuccess = async (username, userWish) => {
  const res = await WishRequest({ username, userWish });
  console.log(res, "redirected");

  if (res.status == 200) {
    navigateTo("/success");
  } else {
    navigateTo("/error");
  }
};

let wishForm = document.getElementById("wish-form");
wishForm.addEventListener("submit", addAnWish);
