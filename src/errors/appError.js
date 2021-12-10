class AppError extends Error {
    constructor(message, code = 500, data){
        super(message);
        this.code = code;
        this.errors = data;
    }
}

module.exports = AppError;