const validateAlphabetString = (string) => {
    if (!/\s*^[a-zA-Z]*\s*$/gm.test(string)) return false;
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
    return true;
}

export const validateAddressError = (address) => {
    if (!/^[a-zA-Z0-9]+$/.test(address)) return false;
    return true;
}

export const validateHighSchoolError = (highSchool) => {
    return true;
}

export const validateMathScore = (mathScore) => {
    if (/\D/.test(mathScore)) return false;
    return true;
}

export const validateLiteratureScore = (literatureScore) => {
    return true;
}

export const validateEnglishScore = (englishScore) => {
    return true;
}