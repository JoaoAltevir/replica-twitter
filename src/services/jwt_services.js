import jsonwebtoken from "jsonwebtoken";


const generateAccessToken = user => {
    const token = jsonwebtoken.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    },
    process.env.JWT_PRIVATE_KEY,
    {
        expiresIn: "1d"
    })

    return token
}

const verifyAccessToken = token => jsonwebtoken.verify(token, process.env.JWT_PRIVATE_KEY);

export default {
    generateAccessToken,
    verifyAccessToken
}