import LikeService from "../service/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(201).json({
            success: true,
            message: 'A  new Like Created Successfully',
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