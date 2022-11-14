import jwt from 'jsonwebtoken'
import  UnthenticatedError  from '../errors/UnthenticatedError.js'



const auth = async (req,res,next) => {

    // To extract the jwt from the header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnthenticatedError('Authentication Invalid')
    }

    // extract from token
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId : payload.userId}
        next()

    } catch (error) {
        throw new UnthenticatedError('Authentication Invalid');
    }
}

export default auth




