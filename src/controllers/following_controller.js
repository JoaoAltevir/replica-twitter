export default followUnfollow = async (req,res) => {
    try {
        if(!req.user.following.includes(req.params.id)){
            req.user.following.push(req.params.id);
            res.json("Followed")
        } else {
            const index = req.user.following.indexOf(req.params.id);
            req.user.following.splice(index, 1);
            res.json("Unfollowed")
        }
        await req.user.save();
        res.status(200).json()
    } catch (err) {
        res.status(400).json()
    }
}
