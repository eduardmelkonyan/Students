const e = require('express');
const err = require('./err');

class User{
    constructor(){};
    #users = [];
    addUser(obj){
        for(let i = 0; i < this.#users.length; ++i){
        if(obj.email === this.#users[i].email){
            return err.unique();
        }
    }
        if(obj.email){
            this.#users.push(obj);
            return 'Success'
        }
        return err.noEmail();
    }
    get showData(){
        return this.#users;
    }
    searchBy(searchBy, value){
        for(let i = 0; i < this.#users.length; ++i){
            if(this.#users[i][searchBy] === value){
                return this.#users[i];
            }
        }
        return err.notFound();
    }
    deleteBy(deleteBy, value){
        for(let i = 0; i < this.#users.length; ++i){
            if(this.#users[i][deleteBy] === value) {
                delete this.#users[i];
                return 'Success!'
            }
        }
        return err.notFound();
    }
    update(email, body){
        for(let i = 0; i < this.#users.length; ++i){
            if(this.#users[i].email === email){
                for(let key in body){
                    this.#users[i][key] = body[key];
                    return 'Changes has been done'
                }
            }
        }
        return err.notRegitered();
    }
}

const user = new User();
module.exports = user;