export interface Course {
    id:number;
    name:string;
    code:string;
    credits:number;
}


export const courses:Course[] = [

{
    id:1,
    name:"Advanced Front-End Development",
    code:"COMP1234",
    credits:3
},

{
    id:2,
    name:"Database Systems",
    code:"COMP2345",
    credits:4
},

{
    id:3,
    name:"Java Programming",
    code:"COMP3456",
    credits:3
}
];