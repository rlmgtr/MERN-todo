module.exports = (req, res, next) => {
const authHEader = req.headers.authorization;
if (!authHEader) {
    res.status(401).send('Please log in to continue');
} else {
    const token = authHEader.split(' ')[1];
}



}