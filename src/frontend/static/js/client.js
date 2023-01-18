// client-side js
// run by the browser each time your view template is loaded

import { navigateTo } from "./index.js";

const addAnWish = (event) => {
  event.preventDefault();
  let userName = document.getElementById("username").value;
  let userWish = document.getElementById("userwish").value;

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
  const origin = location.origin;
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };

  try {
    const response = await axios.post(
      `${origin}/api/v1/users/register-request`,
      { username, userWish },
      config
    );

    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const redirectToSuccess = async (username, userWish) => {
  const res = await WishRequest({ username, userWish });
  if (res.status == 200) {
    navigateTo("/success");
  } else {
    navigateTo("/error");

    setTimeout(() => {
      const errorMessage = res.response?.data?.error;
      if (errorMessage || errorMessage !== undefined) {
        const paragraph = document.getElementById("message");
        paragraph.textContent += errorMessage;
      }
    }, 500);
  }
};

let wishForm = document.getElementById("wish-form");
wishForm.addEventListener("submit", addAnWish);
