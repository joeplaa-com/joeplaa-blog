function validateEmail (email: string) {
    const regExEmail = /[a-z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z\d!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/;
    return regExEmail.test(String(email).toLowerCase());
}

export default validateEmail;