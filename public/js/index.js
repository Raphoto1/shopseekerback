

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
    const profile = fetch("http://localhost:8080/api/user/profile")
    .then((res) => res.json())
    .then((data) => data.payLoad);
    return profile
}

function logout(){
    fetch("http://localhost:8080/api/user/logout",{method:"post"})
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
}

function addToCart (cart,desId){
    const pushToCart = fetch(`http://localhost:8080/api/cart/${cart}/design/${desId}`, {method:"put"})
    .then((res) => res.json())
    .then((data) => data);
    return pushToCart
}

async function addDesignToCart (desId) {
    let user = await getProfile();
    let cart = user.cart[0]._id
    console.log(cart); 
    const pushToCart = await addToCart(cart,desId)
    return pushToCart
}
