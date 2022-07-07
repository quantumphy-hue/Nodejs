const fetch = require('node-fetch');

let nameArray= process.argv.slice(2);

fetch(`https://api.nationalize.io?name=${nameArray[0]}`).then(res=> res.json()).then(txt=>txt.country.forEach(c=> console.log(c))).catch(e=>console.log(e));