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

for (let i=0; i<data.list.length;i++){
console.log(data.list[i]);
}

// Задание выполнено верно, но вы сильно усложнили код :) можно было обойтись только методом JSON.parse, потому что он уже возвращает готовый Javascript-объект. Исправила выше на более простой вариант.