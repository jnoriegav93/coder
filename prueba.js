let inicio;
do{
    inicio = parseInt(prompt('Bienvenido\n\n'+
    '1. Evaluación\n\nIngrese una opción, para cerrar digite 0'));
    switch(inicio){
        case 1:
            alert('eligió 1');
            evaluacion();
            break;
        case 2:
            alert('eligió 2');
            break;
    }

}while(inicio !== 0);


function evaluacion(){
    let usuario = {
        nombres : '',
        respuestas: [],
        correctas: 0,
        incorrectas: 0
    };
    usuario.nombres = prompt('Bienvenido a la evaluación, ingrese sus nombres');
    let prueba = [
        {   
            preguntaID: 1,
            bloque: 1,
            nroPregunta: 1,
            pregunta: '¿ (a == b) es igual a (a === b)?',
            alternativas : {1: 'Sí', 2: 'No', 3: 'N.A.'},
            respuesta: 1
        },{   
            preguntaID: 2,
            bloque: 1,
            nroPregunta: 2,
            pregunta: '¿ (a % b) es igual a (a / b)?',
            alternativas : {1: 'Sí', 2: 'No', 3: 'N.A.'},
            respuesta: 1
        }
    ];
    //Iniciar la prueba
    prueba.forEach(function(item){
        let respuesta_, pregunta_;
        // Estructura de las preguntas
        pregunta_ = 'Pregunta #'+ item.nroPregunta +
        '\n------------------------------------------------\n'+
        item.pregunta + '\n';
        for (const [nro, alternativa] of Object.entries(item.alternativas)) {
            pregunta_ += nro + ') '+ alternativa + '\n';
        }
        pregunta_ += '\n\nDigite una opción:';
        // fin de Estructura de las preguntas
        respuesta_ = parseInt(prompt(pregunta_)) || -1;
        while(respuesta_ < 0){
            alert('Opción incorrecta, por favor digitar una opción de la lista');
            respuesta_ = parseInt(prompt(pregunta_)) || -1;
        };

        usuario.respuestas =  [ { preguntaID: item.preguntaID, respuesta:  respuesta_ }];
        //Validar respuestas
        usuario.correctas   += item.respuesta === respuesta_ ? 1 : 0;
        usuario.incorrectas += item.respuesta !== respuesta_ ? 1 : 0;
    });
    let resultado_final_ = 'Estimado(a)' + usuario.nombres + ':\n\n'+
    'El resultado de su prueba es el siguiente:\n'+
    'Correctas:   ' + usuario.correctas + '\nIncorrectas: '+ usuario.incorrectas;

    //Mostrar resultados
    alert('Resultado final:\n\n'+resultado_final_);
}