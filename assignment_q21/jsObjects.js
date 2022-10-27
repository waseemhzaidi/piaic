class Human{
    #gen
    constructor(_gen){
        this.#gen=_gen
    }
    showGender(){ return this.#gen; }
}

class Person extends Human {
    #name;
    #fname;
    #dob;
    #address;

    constructor(_gen,_name,_fname,_dob,_address){
        super(_gen);
        this.#name=_name;
        this.#fname=_fname;
        this.#dob=_dob;
        this.#address=_address;
    }

    showPersonName(){ return this.#name; }
    showFatherName(){ return this.#fname; }
    showDob(){ return this.#dob; }
    showAddress(){ return this.#address; }
    
}

var h1 = new Person("M","Waseem Haider","Niaz Hussain",29,"Rawalpindi");
console.log(h1.showPersonName());
console.log(h1.showFatherName());
console.log(h1.showDob());
console.log(h1.showAddress());
console.log(h1.showGender());