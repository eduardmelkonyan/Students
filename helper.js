const Error = require('./error')
const error = new Error();

class User {
    constructor(){};
    #students = [];
    #arr = [];
    get showAll() {
        return this.#students
    }
    createStudent(student){
        if(!student.email){
            error.noEmail()
        }
        for(let i = 0; i < this.#students.length; ++i) {
            if(student.email === this.#students[i].email){
                error.noUnique();
            }
        }
        this.#students.push(student);
        return 'success'
    }
    searchBy(searchBy, value){
        for(let i = 0; i < this.#students.length; ++i){
            if(this.#students[i][searchBy] === value){
                return this.#students[i];
            }
        }
        return('student not found!')
    }
}

module.exports = User;