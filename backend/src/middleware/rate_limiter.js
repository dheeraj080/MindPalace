import ratelimit from "../config/upstash.js"


const rate_limiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key ");

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, Try Later"
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rate_limiter 