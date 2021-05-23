module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: ''}

    if (err.message.includes('pseudo'))
        errors.pseudo = "pseudo invalid";

    if (err.message.includes('email'))
        errors.email = "email invalid";

    if (err.message.includes('password'))
        errors.password = "password invalid";;

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "pseudo deja enregistrer";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "email deja enregistrer"
    
    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}

    if (err.message.includes("email"))
    errors.email = "email invalid";

    if (err.message.includes("password"))
    errors.password = "password invalid";

    return errors
}

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: "" };

    if (err.message.includes('invalid file'))
        errors.format = "format invalid";

    if (err.message.includes('max size'))
        errors.maxSize = "le fichier";

    return errors
}