let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hh = date.getHours() + 1;
let mm = date.getMinutes();

console.log(`${year}/${month}/${day} ${hh}:${mm}`);
