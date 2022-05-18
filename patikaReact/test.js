



// //destructing
// const {name,surname,...kalan}=person;
// console.log(name,surname,kalan);   


const person1 = {
    name: 'hakan',
    surname: 'özoğlu',
    age: '30',
    location: 'istanbul',
    gender: 'man',
    score: 10,
    workingDays: 90,
    books: 1,
  }
  const person2 = {
    name: 'akif',
    surname: 'özoğlu',
    age: '32',
    location: 'istanbul',
    gender: 'man',
    score: 17,
    workingDays: 17,
    books: 9,
  }
  const person3 = {
    name: 'beyza',
    surname: 'özoğlu',
    age: '16',
    location: 'trabzon',
    gender: 'woman',
    score: 28,
    workingDays: 72,
    books: 178,
  }
  const person4 = {
      name: 'alp',
      surname: 'öztürk',
      age: '28',
      location: 'aydın',
      gender: 'man',
      score: 28,
      workingDays: 71,
      books: 178,
    }
    const person5 = {
      name: 'serdar',
      surname: 'çakır',
      age: '22',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 70,
      books: 178,
    }
  
    const person6 = {
      name: 'rümeysa',
      surname: 'türkan',
      age: '22',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 69,
      books: 178,
    }
    const person7 = {
      name: 'mehmet ali',
      surname: 'tunay',
      age: '30',
      location: 'istanbul',
      gender: 'man',
      score: 28,
      workingDays: 68,
      books: 178,
    }
  const person8 = {
      name: 'furkan',
      surname: 'atsan',
      age: '23',
      location: 'ankara',
      gender: 'man',
      score: 28,
      workingDays: 67,
      books: 178,
    }
    const person9 = {
      name: 'kader',
      surname: 'arslan',
      age: '24',
      location: 'adana',
      gender: 'man',
      score: 28,
      workingDays: 65,
      books: 178,
    }
  const person10 = {
      name: 'uğurcan',
      surname: 'uçar',
      age: '24',
      location: 'trabzon',
      gender: 'man',
      score: 28,
      workingDays: 64,
      books: 178,
    }

    const people=[person1,person2,person3,person4,person5,person6,person7,person8,person9,person10];
    
    const groupByNameFirstLetter =people.reduce((prev,person)=>{

      if (!prev[person.name[0]]) {
        prev[person.name[0]] = [];
      }
      prev[person.name[0]].push(person);
      return prev;
     },{})
        
    console.log(" isim baş harfine göre grupla ",groupByNameFirstLetter);


   const groupByLocation=people.reduce((prev,person)=>{
    if (!prev[person.location]) {
      prev[person.location] = [];
    }
    prev[person.location].push(person);
    return prev;
   },{})
   console.log("şehre göre grupla ",groupByLocation)














    //    const manAndWoman=people.reduce((prev,person)=>{
    //        if (person.gender==="woman") {
    //            prev.women.push(person);
    //        }else{
    //            prev.men.push(person);
    //        }
    //        return prev;
    //    },{men:[],women:[]})
    //    console.log(manAndWoman);
    
// const ages=people.reduce((prev,person)=>{
//     if (person.age>18) {
//         prev.olderAge.push(person);
//     } else {
//         prev.underAge.push(person);
//     }
//     return prev;

// },{underAge:[],olderAge:[]})

// console.log(ages);

// people.forEach(element => {
//     let temp=[]
//     if (element.name[0] ) {
        
//     }
    
// });



