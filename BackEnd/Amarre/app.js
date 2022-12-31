let respuestaPandi = document.getElementById("btn_bien");
let respuestaPandi2 = document.getElementById("btn_mal");

respuestaPandi.onclick = function(){
    alert('Que bueno mi nena hermosa, no olvides que te quiero mucho y te amo demasiado <3');
}

respuestaPandi2.onclick = function(){
    let Respuesta = prompt("Que tienes corazon?? :c")
    if(Respuesta != null){
        let holi = prompt('Quieres un abrazo? :c');
        return holi === "si" || holi ==="SI"? alert('*le da un abacho con mucho amor*') : alert('*le soba su cabeza con mucho amor*')
    }
}