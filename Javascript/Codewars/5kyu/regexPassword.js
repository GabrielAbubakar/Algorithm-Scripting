function validate(password) {

    return /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password);

   // return /^(?=.*[\w])(?=.*[\W])[\w\W]{8,}$/.test(password)
   //(?=.*[@$!%*#?&^_-])
}

console.log(validate('Password123#'));

//(?=.*[\W])