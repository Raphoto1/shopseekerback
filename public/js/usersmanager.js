console.log('aqui estoy users manager');

async function deleteUsers(e) {
    let respuesta = await fetch("/api/user/", {
        method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.status);
        });
}