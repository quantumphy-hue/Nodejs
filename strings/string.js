const fs= require('fs');

const string= process.argv.slice(2);


const contents= fs.readFileSync('./example.txt','utf-8');
if(~(contents.indexOf(string))){
    console.log(true);
}
else{
    console.log(false);
}