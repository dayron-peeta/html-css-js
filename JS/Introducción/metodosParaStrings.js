const texto = 'Hola soy Dayron'
//propiedad 
//.length()
console.log(texto.length)

//método
//.indexOf() .lastIndexOf() :devuelve el index del primer/último caracter especificado
console.log(texto.indexOf("h")) //h no es H , si no lo encuentra devuelve -1, si la encuentra devuelve el índice de su 1ra ocurrencia
console.log(texto.lastIndexOf("o")) // devuelve el índice de su última ocurrencia

//.slice(desde_donde, hasta_donde) obtener fragmento  puedo pasar solo "desde_donde", si paso números negativos comienza a contar desde el final, no modifica el original
const index = texto.indexOf('D')
console.log(texto.slice(index))

//.replace(texto a reemplazar, texto a poner) devuelve string con texto reemplazado
console.log(texto.replace('Dayron', 'Carlos'))

//.split(tenemos que especificar donde cortar cada elemento) convierte string en arreglo
console.log(texto.split(' '))

//.toUppercase .toLowerCase convierte string a todo mayúsculas/minúsculas
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())