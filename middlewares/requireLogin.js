//next is called when our middle ware is complete
module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({error: 'You must log in!'});
    }

    next();
};