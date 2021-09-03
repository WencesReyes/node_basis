const fs = require('fs');
require('colors');

const createMultiplyTable = async ( base, list, limit ) => {

    try{
        let output = '';
        const fileName = `output/tabla-${base}.txt`;
        
        for(let i = 1; i <= limit; i++)
        {
            output += `${base} x ${i} = ${base * i}\n`;
        }

        if(list)
        {
            console.log("================".green);
            console.log(`   Tabla del ${base}   `.italic.red);
            console.log("================".green);
            console.log(output.rainbow.bold)
        }

        console.log('File was created!!'.rainbow);

        fs.writeFileSync(fileName, output);

        return fileName;
    } catch(err)
    {
        throw err;
    }
}

module.exports = {
    createMultiplyTable,
}