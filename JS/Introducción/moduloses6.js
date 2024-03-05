/* módulos de JS (separar el código de proyectos en múltiples archivos) mejor organización, facilidad de lectura y edición. Varios módulos convergen en un solo archivo que es el que se carga al proyecto. 

Herramientas necesarias: 
rollup.js (rollupjs.org) Paquete que permite crear el archivo bundle (empaquetado de todos los demás archivos )
paquete: código de otras personas que podremos utilizar dentro de nuestros proyectos

gestor NPM (npmjs.com) el google de los paquetes 

NodeJs (nodejs.org) /NPM viene instalado dentro de node por lo q será necesario descargarlo e instalarlo también 

Utilizaremos la terminal gitBash (se puede integrar en VSC) por lo que se recomienda instalar Git

pasos
1 descargar e instalar node y git 
2 abrir terminal git bash (luego de instalado node también tendremos disponible la consola de node )
3 node --version /este comando te dirá la versión de node que tienes instalada 
4 descargar rollup 
5 en el proyecto crear la carpeta Módulos
6 desde VSC abrir la consola /ver/terminal (aprender a relacionarla ver tutorial git bash + vsc)
7 mover la ruta de la terminal hasta la carpeta deseada para descargar los paquetes  /cd módulos
8 desde la pagina de rollup copiar código de instalación (buscar instalación local npm y no global) 
/el código es: npm install rollup --save-dev (--save-dev es una bandera q permite instalarlo  como una dependencia de desarrollo (paquete necesario para trabajar pero sin él, el código funciona igualmente ))
/luego de ejecutar el comando se crea una carpeta node_modules con las configuraciones y paquetes descargados
/podemos eliminar esta carpeta (que pesa mucho) /no los archivos package-lock.json y package.json 
/teniendo el package.json en la carpeta podemos ejecutar el comando $ npm install busca todas las dependencias necesarias y las descarga
9 ver pestaña ´tutorial´ en la pagina oficial de rollup 
/ejecutar $ rollup en la consola (como esta en local el comando debe ser $ npx rollup) luego de ejecutar esto se muestran todos los comandos disponibles
10 crear en módulos la carpeta src /código fuente o source 
/aquí dentro crear index.js o main.js  (desde aquí se importan las funciones desde los archivos específicos) Ej: import carrito from './carrito'; y ya luego se puede utilizar carrito(); dentro del index
/también se crean los demás archivos.js que tienen las diferentes funcionalidades específicas (un archivo por funcionalidad) (desde aquí se exportan las funciones al index ) Ej: export default () => {console.log('carrito funcionando');}
11 crear en módulos la carpeta public /contiene los archivos css, iconos, imágenes etc /aquí va el bundle
12 Compilar el archivo q se encuentra en carpeta source y q se llama index.js (se especifica el formato): npx rollup src/index,js -f cjs (esto devuelve un archivo con el código de los demás archivos importados )
/para q lo guarde en un archivo se usa la bandera -o (output): npx rollup src/index,js -o public/bundle.js -f cjs
13 Crear un archivo de configuración (rollup.config.js) en la carpeta módulos, para no tener que ejecutar estos comandos para actualizar el archivo bundle.js cada vez que modifiquemos código: 
export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js'
        format: 'cjs'
    }
}
/para que este export funcione debemos configurar en package.json "type" = "module",
/ $ npx rollup -c /esto crea el archivo bundle a partir del archivo de configuración creado anteriormente 
14 para evitar tener que ejecutar este código manualmente podemos hacer que npm se quede detectando cambios en los archivos y lo compile automáticamente 
/para esto podemos añadir al package.json el comando dentro de los scripts 
"build": "rollup --config --watch " /la bandera watch es la q hace q se ejecute luego  de detectar cambios 
/$ npm run /corre los comandos dentro de los scripts en package.json 
/$ npm run build /corre el comandos llamado build dentro de los scripts en package.json 
/luego de ejecutar esto ya se va a actualizar automáticamente el bundle

*/
