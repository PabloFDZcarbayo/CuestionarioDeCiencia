/*HE CREADO UN ARRAY DE OBJETOS LLAMADO PREGUNTAS, EN EL SE ALMACENA TANTO LA PREGUNTA COMO LAS OPCIONES
DE RESPUESTAS, Y ADEMAS LA RESPUESTA CORRECTA */
let Preguntas = [
    {
        id: 0,
        title: "¿Cúal es el símbolo del Mercurio en la tabla periódica?",
        option1: "MG",
        option2: "MN",
        option3: "HG",
        option4: "MC",
        IDCorrecto: "boton0" + "3",
    },
    {
        id: 1,
        title: "¿A que temperatura se funde el plomo?",
        option1: "350,3 ºC",
        option2: "456 ºC",
        option3: "289,8 ºC",
        option4: "327,5 ºC",
        IDCorrecto: "boton1" + "4",
    },
    {
        id: 2,
        title: "¿Cual es la velocidad de la luz?",
        option1: "3X10^8 m/s",
        option2: "4000 km/s",
        option3: "5X10^16 cm/s",
        option4: "100000 km/h",
        IDCorrecto: "boton2" + "1",
    }
];


/* AQUI HE CREADO 2 VARIABLES, POR UN LADO EL CONTADOR DE RESPUESTAS ACERTADAS 
Y POR OTRO LADO EL INDICE ACTUAL QUE ME PERMITIRÁ 
IR CAMBIANDO ENTRE LOS OBJECTOS DE MI ARRAY  PREGUNTAS */
let RespuestasAcertadas = 0;
let indiceActual = 0;


/*ESTE ES UN METODO QUE CAMBIA EL COLOR DEL BACKGROUND DE LOS BOTONES
DEPENDIENDO DE SI SON CORRECTAS LAS RESPUESTAS O NO.
TIENE EN CUENTA TANTO EL ID DEL BOTON COMO SI ES CORRECTO O NO*/

function cambiarColor(idBoton, esCorrecto) {
    const boton = document.getElementById(idBoton);
    
    /*SI EL ID DEL BOTON ES CORRECTO CAMBIARA A VERDE, SI NO A ROJO*/
    boton.style.backgroundColor = esCorrecto ? 'green' : 'red';
    
    /*ADEMAS DE CAMBIAR DE COLOR, SI LA RESPUESTA ES VERDADERA INCREMENTAREMOS
    LA VARIABLE RESPUESTAS ACERTADAS,  ADEMAS PASAREMOS AL 
    METODO SIGUIENTE PREGUNTA Y EL METODO MOSTRAR PREGUNTA, PERO
    ANTES IMPLEMENTAREMOS UN PEQUEÑO DELAY DE 2 SEGUNDOS*/

    if (esCorrecto === true) { 

        if(indiceActual>=Preguntas.length){
            RespuestasAcertadas++;
            setTimeout(function() {
                mostrarPregunta();
            }, 2000);
        }
        else {
        RespuestasAcertadas++;
        SiguientePregunta();
        setTimeout(function() {
            mostrarPregunta();
        }, 2000); // Espera de 2 segundoS (2000 milisegundos)
    }
    }
    /*POR EL CONTRARIO SI HEMOS FALLADO EN LA RESPUESTA, VOLVEREMOS A MOSTRAR 
    LA MISMA PREGUNTA RESETEANDO LAS RESPUESTAS*/
        else {
            setTimeout(function() {
                mostrarPregunta();
            }, 2000);

        }
        
        /*SI YA TENEMOS LAS 3 PREGUNTAS ACERTADAS, EL CONTADOR
        NO SE INCREMENTARÁ MAS*/
        if(RespuestasAcertadas>Preguntas.length)
        RespuestasAcertadas--;
    }



/* CON ESTE MÉTODO PASAMOS A LA SIGUIENTE PREGUNTA*/
function SiguientePregunta() {

    /*SI NUESTRO INDICE ACTUAL ES MENOR QUE EL TOTAL DE PREGUNTAS
    NOS PERMITIRA PASAR A LA SIGUIENTYE*/
    if (indiceActual < Preguntas.length) {
        indiceActual++;
    }
    /*SIN EMBARGO SI EL INDICE YA ES IGUAL AL DE LA ULTIMA 
    PREGUNTA NOS DARA UN AVISO DE QUE NO HAY MAS PREGUNTAS*/
    if (indiceActual >= Preguntas.length) {
        alert("Ya no hay más preguntas");
    }
}

/*ESTE METODO FUNCIONA IGUAL QUE EL ANTERIOR PERO ES PARA VOLVER A LA
PREGUNTA ANTERIOR*/
function PreguntaAnterior() {
    if (indiceActual <= Preguntas.length && indiceActual>=0) {
        indiceActual--;
    }
    if (indiceActual < 0) {
        alert("Ya no hay más preguntas");
    }
}

/*EL MÉTODO MOSTRAR PREGUNTA ES EL METODO PRINCIPAL Y EL QUE HARÁ
QUE SE MUESTRE LA PREGUNTA EN PANTALLA*/
function mostrarPregunta() {
    
    /*LO PRIMERO CREA LA VARIABLE PREGUNTA, QUE UTILIZA LA VARIABLE INDICE ACTUAL
    PARA ELEGIR UN OBJETO DEL ARRAY PREGUNTAS*/
    const pregunta = Preguntas[indiceActual];
    
    /*AHORA CREA 4 VARIABLES QUE FUNCIONARAN COMO ID DE CADA BOTON
    EL ID SERA CREADO POR EL ID DE LA PREGUNTA EN EL QUE ESTEMOS + EL 
    NUMERO DEL BOTON*/
    const idBoton1 = "boton" + pregunta.id + "1";
    const idBoton2 = "boton" + pregunta.id + "2";
    const idBoton3 = "boton" + pregunta.id + "3";
    const idBoton4 = "boton" + pregunta.id + "4";

    /*LA VARIABLE PREGUNTA HTML COGERA ESTA PARTE DE NUESTRO HTML Y LO IRA ACTUALIZANDO
    CON EL CONTENIDO DE LOS DIFERENTES BOTONES, LA PREGUNTA EN CUESTION E
    IRA ACTUALIZANDO EL ID DE LOS DIFERENTES BOTONES.
    ESTO ES PARA QUE EN CADA PREGUNTA PODAMOS TENER UN ID CORRECTO DIFERENTE*/
    const preguntaHTML = `
        <div class="row">
            <div class="overflow-auto bg-info-subtle border border-primary">
                <p class="Pregunta">${pregunta.title}</p>
            </div>
        </div>
        <div class="row">
            <div class="d-grid gap-2 col-6 mx-auto custom-column">
                <button id="${idBoton1}" class="btn btn-primary btn-lg btn-block full-height" type="button">${pregunta.option1}</button>
                <button id="${idBoton3}" class="btn btn-primary btn-lg btn-block full-height" type="button">${pregunta.option3}</button>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto custom-column">
                <button id="${idBoton2}" class="btn btn-primary btn-lg btn-block full-height" type="button">${pregunta.option2}</button>
                <button id="${idBoton4}" class="btn btn-primary btn-lg btn-block full-height" type="button">${pregunta.option4}</button>
            </div>
        </div>
        </div>

    `;
    /*AQUI CREAMOS LA VARIABLE DIVPREGUNTAS, ESTA BUSCARÁ EN NUESTRO HTML 
     EL ID"PREGUNTAS" Y ALMACENARÁ ESE HTML*/
    const divPreguntas = document.getElementById("Preguntas");

    /*AHORA A LA VARIABLE DIV PREGUNTAS 
    LE IMPLEMENTAMOS EL HTML DE PREGUNTAHTML*/
    divPreguntas.innerHTML = preguntaHTML;

    /*CREAMOS UNA VARIABLE ID CORRECTO QUE COGERA EL ID CORRECTO DE NUESTRO ARRAY*/
    const idCorrecto = pregunta.IDCorrecto;


    /*HE AÑADIDO UN EVENTO PARA CADA BOTON (CADA UNO CON SU ID), CUANDO CLIQUEMOS SOBRE UN BOTON LO 
    MANDARÁ AL MÉTODO CAMBIAR COLOR*/
    document.getElementById(idBoton1).addEventListener('click', function() {
        cambiarColor(idBoton1, idBoton1 === idCorrecto);
    });
    document.getElementById(idBoton2).addEventListener('click', function() {
        cambiarColor(idBoton2, idBoton2 === idCorrecto);
    });
    document.getElementById(idBoton3).addEventListener('click', function() {
        cambiarColor(idBoton3, idBoton3 === idCorrecto);
    });
    document.getElementById(idBoton4).addEventListener('click', function() {
        cambiarColor(idBoton4, idBoton4 === idCorrecto);
    });

    /*POR ULTIMO LLAMAMOS AL MÉTODO ACTUALIZAR FOOTER*/

    actualizarFooter();
}



/*ESTE ES EL ULTIMO MÉTODO QUE SIRVE PARA ACTUALIZAR EN FOOTER*/
function actualizarFooter() {
   
    /*AL IGUAL QUE ANTES, CREAREMOS UNA VARIABLE CON EL HTML DEL FOOTER,
   ESTE SE IRA ACTUALIZANDO SEGUN NUESTRAS RESPUESTAS ACERTADAS*/
    const footerHTML = `
        <div class="container text-center  border border-primary Mifooter">
            <div class="row text-center text-md-start">
                <div class="col-4 me-auto">
                    <button id ="PreguntaAnterior" type="button" class="btn btn-outline-info">Pregunta Anterior</button>
                </div>
                <div class="col-4 text-center">
                    <button id="RespuestasAcertadas"  class=" btn-outline-info">Repuestas acertadas:${RespuestasAcertadas} /3</button>
                </div>
                <div class="col-4 text-center">
                    <button  id ="SiguientePregunta" type="button" class="btn btn-outline-info">Siguiente Pregunta</button>
                </div>
            </div>
        </div>
    `;
    /*AGREGAMOS NUESTRO HTML MODIFICADO*/
    document.getElementById("footer").innerHTML = footerHTML;


    /*POR ULTIMO AGREGAMOS UN EVENTO DE CLICK PARA NUESTROS BOTONES
    SIGUIENTE PREGUNTA Y PREGUNTA ANTERIOR QUE NOS LLEVARAN A DICHOS METODOS
    Y LUEGO VOLVEREMOS A MOSTRAR PREGUNTA*/
    document.getElementById('SiguientePregunta').addEventListener('click', function() {
        SiguientePregunta();
        mostrarPregunta();
    });
    
    document.getElementById('PreguntaAnterior').addEventListener('click', function() {
        PreguntaAnterior();
        mostrarPregunta(); 
    });
}


/*EL PROGRAMA SE INICIA CON EL METODO MOSTRAR PREGUNTA, LA CUAL MONSTRARÁ LA PRIMERA*/
mostrarPregunta(); 