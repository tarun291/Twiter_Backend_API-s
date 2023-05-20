import CommentService from "../service/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        console.log(req.user.id);
        const response = await commentService.createComment(req.query.modelId,req.query.modelType,req.user.id,req.body.content);
        return res.status(201).json({
            success: true,
            message: 'A  new Comment Created Successfully',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}