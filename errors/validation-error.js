import { StatusCodes } from 'http-status-codes'
import CustomError from './custom-error.js'
class ValidationError extends CustomError{
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}

export default ValidationError;
