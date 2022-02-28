const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin || req.user.id === req.params.id) {
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password, 
                process.env.SECRET_KEY
                ).toString();
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, { new: true });
            res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can only update your account.");
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin || req.user.id === req.params.id){
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can only delete your account.");
    }
})

//GET
router.get("/find/:id", async (req, res) => {
    try{
       const user = await User.findById(req.params.id);
       const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch(err){
        res.status(500).json(err);
    }
})

//GET ALL
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin){
        try{
            const users = query ? await User.find().limit(5) : await User.find();
            res.status(200).json(users);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed to view all users.");
    }
})

//GET STATS
router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.getFullYear() - 1);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    try{
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month : "$createdAt"}
                }
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;