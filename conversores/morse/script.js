const codigoMorse = {  
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',   
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',  
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',  
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',  
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',  
    'Z': '--..',  '1': '.----', '2': '..---', '3': '...--', '4': '....-',  
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',  
    '0': '-----', ' ': '/'  
};  

function convertirAMorse(texto) {  
    return texto.toUpperCase().split('').map(letra => codigoMorse[letra] || '').join(' ');  
}  

document.getElementById('convertirBtn').addEventListener('click', function() {  
    const texto = document.getElementById('inputTexto').value;  
    const textoConvertido = convertirAMorse(texto);  
    document.getElementById('outputTexto').value = textoConvertido;  
});