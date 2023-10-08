// let student = [
//     {
//         name: "NVA",
//         age: 16,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     },
//     {
//         name: "NVB",
//         age: 18,
//         course: ["mindX 01", "mindX 02", "mindX 04"]
//     },
//     {
//         name: "NVC",
//         age: 17,
//         course: ["mindX 01", "mindX 03", "mindX 04"]
//     },
//     {
//         name: "NVD",
//         age: 15,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     }
//     ]
//     var age= prompt('Do tuoi can tim')

//     var isFind = false;

//     for (let i = 0; index < student.length; i++) {
//        if(student[i].age==age){
//         console.log(student[i].name);
//         isFind = true;
//        }
       
        
//     }
   
// if(isFind==false){
//     console.log('ko tim thay');
// }

// const a=()=>{
//     console.log('hhu');
    
// }

// a()
// var course=prompt('khoa hoc can tim')
// var isFind=false;

// for (let i = 0; i < student.length; i++) {
//     if(student[i].course.includes(course)){
//         console.log(student[i].name);
//         isFind=true;
//     }
    
// }
// if(isFind==false){
//     console.log('ko tim thay');
// }

let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

// let result = arr1.filter(num => num > 3);
// console.log(result);
// const find = arr1.find((num) =>
//  {
//     return num>3
// })

// console.log(find);
// const newAir=arr1.concat(arr2)
// console.log(newAir);



// const newAir=[...arr1,...arr2]
// console.log(newAir);


const[a,...rest]=arr1
console.log(a);
console.log(rest);




   