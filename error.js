class Error {
    constructor(){};
    noEmail(){
        throw new Error('There is no email')
    }
    noUnique(){
        throw new Error('This email is not unique')
    }
}

module.exports = Error;