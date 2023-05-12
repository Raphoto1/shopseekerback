function makeRequest(){
    fetch("http://localhost:8080/test")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function getDesigns(){
    fetch("http://localhost:8080/api/designs")
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
}

function getProfile(){
    fetch("http://localhost:8080/api/user/profile")
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
}

function logout(){
    fetch("http://localhost:8080/api/user/logout",{method:"post"})
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
}
