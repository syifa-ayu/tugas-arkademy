const fs = require('fs');

console.log('start reading a file...');

fs.readFile('txt.txt', 'utf-8', (err, content)=>{
    if(err) {
        console.log ('error happened during reading the file');
        return console.log(err);
    }
    console.log("yeay, berhasil! Datanya: " + content);




fs.rename('txt.txt', 'terserah.txt', (err) => {
    if(err) console.log("gagal rename!"+err);
    
    console.log("Berhasil");
})

})

console.log('end of the file');
