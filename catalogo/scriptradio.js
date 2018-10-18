function mostrar(boton){
    with(document.formulario){
    var msg="Elementos: "+edad.length+"\n";
    msg+="Menor de 18 años: "+edad[0].checked+"\n";
    msg+="Entre 18 y 60 años: "+edad[1].checked+"\n";
    msg+="Mayor de 60 años: "+edad[2].checked+"\n";
    }
    alert(msg);
    44
    }
    function seleccio(){
    with(document.formulario){
    for(var i=0;i<edad.length && !edad[i].checked;i++);
    if(i<edad.length)
    alert("El valor seleccionad es "+edad[i].value);
    else
    alert("Debería seleccionar un valor");
    }
    }