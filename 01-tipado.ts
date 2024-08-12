let username: string = "sergio.hidalgo";
let lastname = "hidalgo";
lastname = "cáceres";
username = "carolina.avalos";

const password = "supersecreto";
//password = "nuevo valor"

let listName: Array<string> = ["José", "Augusto", "Claudia"];
listName.push("Carmen");
//listName.push(10)

let listUsers: string[] = ["Javier", "Luis"];

let listStudents: Array<{
  name: string;
  age: number;
  addresses: Array<string>;
}> = [
  { name: "Carla", age: 30, addresses: ["av. Los Girasoles 123"] },
  {
    name: "Claudia",
    age: 25,
    addresses: ["Jirón Azucenas 456", "Parque Los Pescadores 234"],
  },
];

let dataToProcess: Array<Array<string>> = [
  ["ProcessA01", "ProcessA02", "ProcessA03"],
  ["ProcessB01", "ProcessB02"],
];

let dataUserToExport: Array<Array<{ name: string; age: number }>> = [
  [
    { name: "Mario", age: 24 },
    { name: "Andrea", age: 40 },
  ],
  [{ name: "Juan", age: 23 }],
];
