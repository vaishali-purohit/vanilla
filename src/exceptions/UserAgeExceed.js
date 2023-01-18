class UserAgeExceed extends Error {  
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name
    this.status = 400
    this.message = message
  }

  statusCode() {
    return this.status
  }
}

module.exports = UserAgeExceed;  
