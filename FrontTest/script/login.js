let form = document.querySelector("form");

form.onsubmit = async (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let respuesta = await fetch("http://localhost:8080/api/user/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.status);
      if (data.status == "success") {
        window.location.href = "http://127.0.0.1:5500/FrontTest/pages/profile.html";
      }
    });
};
