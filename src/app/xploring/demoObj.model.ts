// export class DemoObjectModel {
//     public name: string;
//     public description: string;
//     public identity: number;

//     constructor(nam: string, details: string, id: number) {
//         this.name = nam
//         this.description = details
//         this.identity = id
//     }
// } === below this ==>

export class DemoObjectModel {
    constructor(public name: string, public desc: string, public id: number) { }
}