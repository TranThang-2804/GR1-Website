export type StudentResponse = {
    id : number,
    firstName : string,
    lastName : string | null,
    address : string |null,
    dob : Date,
    highSchool : string,
    mathScore : number,
    literatureScore : number,
    englishScore : number
    finalScore: number;
    name: string
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