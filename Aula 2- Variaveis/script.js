//bolean
var VouF = false;
console.log(typeof (VouF));

//number
var numeroQualquer = 1;
console.log(typeof (numeroQualquer));

//string
var nome ='jane';
console.log(typeof (nome));

//declarar variavel
var variavel = 'jane';
variavel ='felipe';
console.log(typeof (variavel));

let variavel2 = 'jane';
variavel2 ='felipe';
console.log(typeof (variavel2));

const constante ='jane';    
console.log(typeof (constante));

//escopo
var escopoGlobal = 'global';
console.log(typeof (escopoGlobal));

function escopoGlobal(){
    let escopoLocalInterno ='local';
    console.log(escopoLocalInterno);
}

escopoLocal();
