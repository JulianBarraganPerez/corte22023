//crea un cuadro de dialogo//
window.alert("hola, bienbenido a davivienda")
//crea objetos//
var contraseña,contraseñacorroborar,xxxx;
contraseña=4139
window.alert("hola, su contraseña es 4139")
//pide informacion para un objeto//
contraseñacorroborar=prompt("ingrese la contraseña de su tarjeta")
//crea un bucle en el que si el valor de un objeto no coincide con otro este repite la pregunta hasta que coincida un maximo de 3 veces//
if (contraseñacorroborar==contraseña){
    window.alert("ingreso exitoso")
    xxxx=prompt("cuanto dinero desea retirar")
    window.alert("tranzacion finalizada")
}else{
        window.alert("error, porfavor ingrese su contraseña de nuevo")
        contraseña1=prompt("ingrese la contraseña de su tarjeta")
        if (contraseña1==contraseña){
            window.alert("ingreso exitoso")
            xxxx=prompt("cuanto dinero desea retirar")
            window.alert("tranzacion finalizada")
        }else{
               window.alert("error, porfavor ingrese su contraseña de nuevo")
               contraseña2=prompt("ingrese la contraseña de su tarjeta")
               if (contraseña2==contraseña){
                   window.alert("ingreso exitoso")
                   xxxx=prompt("cuanto dinero desea retirar")
                   window.alert("tranzacion finalizada")
                }else{
                    window.alert("error, lo sentimos a llegado al numero maximo de intentos, bloquearemos su tarjeta por seguridad")
                }
        }
}