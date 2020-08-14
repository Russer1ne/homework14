const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const people = data.list;

let result = new Object(); 

for (let i = 0; i < people.length;i++){
result[i] = {
  name: people[i].name,
  age: people[i].age,
  prof: people[i].prof,
  }
 }
for (let i=0; i<people.length;i++){
console.log(result[i]);
}

