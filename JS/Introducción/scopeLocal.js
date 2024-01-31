//declaradas dentro  de una función y solo se puede acceder a ella dentro (incluido desde dentro de funciones anidadas)

var ObtenerNumeroDeLetras = (nombre) => {
    var numero = nombre.length
    console.log(`${nombre} tiene ${numero} letras`)

    var funcAnidada = ( ) => {
        console.log(numero)
    }
    funcAnidada()
}

ObtenerNumeroDeLetras('Dayron')
console.log(numero) //no se puede acceder desde fuere