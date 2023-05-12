export const renderSignin = async(req,res) =>{
    try {
        res.render("signin");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderIndex = async(req,res) =>{
    try {
        res.render("index");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderLogin = async (req,res) =>{
    try {
        res.render("login");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderDesigns = async(req,res) =>{
    try {
        res.render("designs");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderProfile = async (req,res) =>{
    try {
        res.render("profile");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}