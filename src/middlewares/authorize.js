export const authorize = (role) => {
    return async(req,res,next) => {
        console.log(req.user.role);
        console.log(role);
        if(!req.user) return res.status(401).send({error:"unauthorized"});

        if(req.user.role != role)
        return res.status(403).send({
            error: "no permition for this resourse"
        });
        next();
    }
}