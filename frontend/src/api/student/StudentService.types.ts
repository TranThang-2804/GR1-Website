export type StudentResponse = {
    finalScore: number;
    name: string
    id : number,
    firstName : string,
    lastName : string | null,
    address : string |null,
    dob : Date,
    highSchool : string,
    mathScore : number,
    literatureScore : number,
    englishScore : number
}

export type StudentRequest = {
    id : number,
    firstName : string,
    lastName : string | null,
    address : string |null,
    dob : Date,
    highSchool : string,
    mathScore : number,
    literatureScore : number,
    englishScore : number
}