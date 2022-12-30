import "../css/style.scss";
import { signUp, signIn, } from "../api"
import { SignUp } from "./signUp";
import { SignIn } from "./signIn";

document.addEventListener("DOMContentLoaded", (e) => {
  const page = location.pathname;

  if (page === "/index.html" || page === "/") {
    console.log(page);
  }
  if (page === "/signUp.html" || page === "/signUp") {
    const form = document.querySelector(".signUp");
    console.log(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new SignUp(
        form.name.value,
        form.lastName.value,
        form.email.value,
        form.password.value,
        form.phone.value
      );
      console.log(formData);


      signUp(formData).then((data) => {
        console.log(data);
        if (data.status == 200) {
          alert("Xech bolmasa shuni eplading!")
        }
      })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    });
  }

  if (page === "/signIn.html" || page === "/signIn") {
    const form = document.querySelector(".signIn");
    console.log(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new SignIn(
        form.email.value,
        form.password.value,
      );
      console.log(formData);


      signIn(formData).then((data) => {
        alert("Akkauntga kirdingiz!")

      })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    });
  }

})


