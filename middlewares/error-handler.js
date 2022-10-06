
import { StatusCodes } from "http-status-codes";


export const errorHandlerMiddle= (err,req,res,next) =>{
    const defaultError  = {
        StatusCodes: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong, try again later.",
    }

    res.status(defaultError.StatusCodes).json({msg: defaultError.msg})
}
