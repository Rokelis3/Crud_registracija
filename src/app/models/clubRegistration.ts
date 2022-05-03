export interface ClubRegistation{
    alergies:Array<string>[],
    club:Array<{
        year:number,
        clubName:string,
        typeOfClub:string
    }>,
    email:string,
    klass:number,
    name:string,
    surname:string
}

   