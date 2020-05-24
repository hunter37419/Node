const fs = require('fs');


let data = '';

let listarTabla = (base2, limite) => {


    for (let i = base2; i < limite; i++) {
        data += `${base2} * ${i} = ${base2*i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base2}-${limite}.txt`, data, (err) => {
        if (err)
            console.log(err);
        else
            console.log(`tabla-${base2}-${limite}.txt`);
    });


}
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
        }

        for (let i = 1; i < 12; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });



    });
}

module.exports = {

    crearArchivo,
    listarTabla
}