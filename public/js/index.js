

function makeRequest() {
    console.log("entro");
    fetch("/test")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function getDesigns(){
    fetch("/api/designs")
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
}

function logout(){
    const logout = fetch("/api/user/logout",{method:"post"})
    .then((res) => res.json())
    .then((data) => console.log(data.payLoad));
    return logout
}

async function getProfile(){
    const profile = await fetch("/api/user/profile")
    .then((res) => res.json())
        .then((data) => data.payLoad);
    return profile
}

async function addDesignToCart (desId) {
    let user = await getProfile();
    console.log(user);
    let cart = user.cart[0]._id
    console.log(cart); 
    const pushToCart = await addToCart(cart,desId)
    return pushToCart
}

function addToCart (cart,desId){
    const pushToCart = fetch(`/api/cart/${cart}/design/${desId}`, {method:"put"})
    .then((res) => res.json())
    .then((data) => data);
    return pushToCart
}

function purchaseCart (cart){
    console.log(cart);
    const purchase = fetch(`/api/cart/${cart}/purchase`, {method:"post"})
    .then((res) => res.json())
    .then((data) => data);
    return purchase
}

// Handlebars.registerHelper('if_eq', function(a, b, opts) {
//     if (a == b) {
//         return opts.fn(this);
//     } else {
//         return opts.inverse(this);
//     }
//   });