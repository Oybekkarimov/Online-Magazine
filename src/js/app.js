import "../css/style.scss";

const form = document.querySelector("#signUpForm");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  console.log(formData);
  console.log([...formData]);

  fetch(`https://shopzone.onrender.com/auth/sign-up`, {
    method: "POST",
    body: formData,
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// fetch("https://shopzone.onrender.com/auth/sign-up");
