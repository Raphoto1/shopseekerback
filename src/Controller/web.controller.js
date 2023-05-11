export const renderIndex = async(req,res) =>{
    try {
        res.render("index");
        
    } catch (error) {
        res.send(`<div>Hubo un error al cargar esta vista</div>`);
    }
}

export const renderLogin = async (req,res) =>{

}

export const renderDesigns = async(req,res) =>{

}

export const renderProfile = async (req,res) =>{
    
}