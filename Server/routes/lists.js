const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

// CREATE
router.post("/add", verify, async (req, res) => {
    if(req.user.isAdmin) {
        const newList = new List(req.body);
        
        try{
            const savedList = await newList.save();
            res.status(200).json(savedList);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot add a list.");
    }
})

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        try{
            const updatedList = await List.findByIdAndUpdate(
                req.params.id, 
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedList);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot add a list.");
    }
})

// DELETE
router.delete("/find/:id", verify, async (req, res) => {
    if(req.user.isAdmin) {
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted.");
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You cannot delete a list.");
    }
})

// GET
router.get("/", verify, async (req, res) => {
    const typequery = req.params.type;
    const genrequery = req.params.genre;
    let list = [];

    try{
        if(typequery) {
            if(genrequery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typequery, genre: genrequery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typequery } },
                ]);
            }
        } else {
            list = await List.aggregate([
                { $sample: { size: 10 } },
            ]);
        }
        res.status(200).json(list);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;