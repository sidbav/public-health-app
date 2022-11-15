import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error.js";


class UnthenticatedError extends CustomError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }

}

export default UnthenticatedError
