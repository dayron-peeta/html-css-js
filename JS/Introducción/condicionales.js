//utilizan operadores lógicos y de comparación
//estructura Si(condición){código a ejecutar} SiNo {código alternativo}

const usuario = {
    edad: 17,
    pais: 'Mexico',
    ticket: true
}

//if - else if - else
if(usuario.pais === 'USA'){
    console.log('el usuario es americano')
}else if (usuario.pais === 'Mexico'){ 
    console.log('el usuario es mexicano')
} else {
    console.log('el usuario no es mexicano ni americano')
}

if (usuario.edad > 17) {
    //anidar condicional
    if (usuario.ticket > 17) {
        console.log("el usuario es mayor de edad y tiene ticket")
    } else {
        console.log("el usuario es menor de edad pero no tiene ticket")
    }
} else {
    console.log("el usuario es menor de edad")
}