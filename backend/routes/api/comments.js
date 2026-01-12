// Hey GitHub Copilot
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
router.get("/:id", async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ comment });
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newComment = new Comment(req.body.comment);
        const savedComment = await newComment.save();
        res.status(201).json({ comment: savedComment });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            req.body.comment,
            { new: true }
        );
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ comment: updatedComment });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});
module.exports = router;
