
const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");

let result = new Object();     
//console.log(studentNode)
//console.log(studentNode.length)
for(let i = 0; i<studentNode.length; i++){
  
const nameNode = studentNode.item(i).querySelector('name')
const firstNode = studentNode.item(i).querySelector("first");
const secondNode = studentNode.item(i).querySelector("second");
const ageNode = studentNode.item(i).querySelector("age");
const profNode = studentNode.item(i).querySelector("prof");
const langAtr = nameNode.getAttribute('lang');

 result[i] = {
  name: `${firstNode.textContent}` + `${secondNode.textContent}`,
  age: ageNode.textContent,
  prof: profNode.textContent,
  lang: langAtr
  }
}

for(let i = 0; i<studentNode.length; i++){
 console.log(result[i]);
}
