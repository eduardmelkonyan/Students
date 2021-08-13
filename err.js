class Err{
    constructor(){};
    noEmail(){
        throw new Error('Oops, there is no email!')
    }
    unique() {
        throw new Error('This email is already available!')
    }
    notFound() {
        throw new Error('Student is not found!')
    }
    notRegitered() {
        throw new Error('This email is not registered!')
    }
}

const err = new Err();
module.exports = err;