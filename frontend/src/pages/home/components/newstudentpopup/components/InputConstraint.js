const validateAlphabetString = (string) => {
    if (!/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(string)) return false;
    return true;
}

const validateScore = (score) => {
    if (/w/.test)
        if (!/(?<![\d.])(\d{1,2}|\d{0,2}.\d{1,2})?(?![\d.])/.test(score)) return false;
    let intScore = parseFloat(score);
    if ((intScore < 0) || intScore > 10) return false;
    return true;
}

export const validateId = (id) => {
    if (!/^[0-9]*$/gm.test(id)) return false;
    return true;
}

export const validateFirstName = (firstName) => {
    if (!validateAlphabetString(firstName)) return false;
    return true;
}

export const validateLastName = (lastName) => {
    if (!validateAlphabetString(lastName)) return false;
    return true;
}

export const validateDob = (dob) => {
    if (!/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/.test(dob)) return false;
    return true;
}

export const validateAddressError = (address) => {
    // if (!/^[a-zA-Z0-9]+$/.test(address)) return false;
    return true;
}

export const validateHighSchoolError = (highSchool) => {
    if (!validateAlphabetString(highSchool)) return false;
    return true;
}

export const validateMathScore = (mathScore) => {
    if (!validateScore(mathScore)) return false;
    return true;
}

export const validateLiteratureScore = (literatureScore) => {
    if (!validateScore(literatureScore)) return false;
    return true;
}

export const validateEnglishScore = (englishScore) => {
    if (!validateScore(englishScore)) return false;
    return true;
}