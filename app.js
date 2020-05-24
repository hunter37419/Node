const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs/').argv;


// let parametro = argv[2];
// let base = parametro.split('=')[1]
let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("crear");

        crearArchivo(argv.base)
            .then(archivo => { console.log(`El archivo tabla-${argv.base}.txt ha sido creado`); })
            .catch(e => console.log(e));
        break;
    case 'listar':
        console.log("listar");
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log("No se ha reconocido el comando");

}