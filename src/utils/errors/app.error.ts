
//============error class for app level errors =============
// This class is used to create custom error objects that can be thrown in the application
// It extends the built-in Error class and adds a status property to indicate the HTTP status code
// It can be used to handle errors in a more structured way, allowing for better error handling and logging
// It can be used in conjunction with the generic error handler middleware to send appropriate error responses to the client
// It can be used to create specific error types for different error scenarios, such as validation errors, authentication errors, etc.



export interface AppError extends Error {
    message: string;
    status: number;
}

export class InternalServerError implements AppError {
    status: number = 500;
    name: string = "InternalServerError";
    message: string = "Internal Server Error";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}


export class BadRequestError implements AppError {
    status: number = 400;
    name: string = "BadRequestError";
    message: string = "Bad Request";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}

export class NotFoundError implements AppError {
    status: number = 404;
    name: string = "NotFoundError";
    message: string = "Not Found";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}

export class UnauthorizedError implements AppError {
    status: number = 401;
    name: string = "UnauthorizedError";
    message: string = "Unauthorized";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}


export class ForbiddenError implements AppError {
    status: number = 403;
    name: string = "ForbiddenError";
    message: string = "Forbidden";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}


export class ConflictError implements AppError {
    status: number = 409;
    name: string = "ConflictError";
    message: string = "Conflict";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}


export class notImplementedError implements AppError {
    status: number = 501;
    name: string = "notImplementedError";
    message: string = "Not Implemented";  
    constructor(message?: string) {
        if (message) {
            this.message = message;
        }
    }
}