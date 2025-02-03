function convertirAJeringoso(texto) {  
    const vocales = ['a', 'e', 'i', 'o', 'u'];  
    return texto.split(' ').map(palabra => {  
        return palabra.split('').reduce((resultado, letra) => {  
            resultado += letra;
            if (vocales.includes(letra.toLowerCase())) {   
                resultado += 'p' + letra;  
            }  
            return resultado;  
        }, '');  
    }).join(' ');  
}  

document.getElementById('convertirBtn').addEventListener('click', function() {  
    const texto = document.getElementById('inputTexto').value;  
    const textoConvertido = convertirAJeringoso(texto);  
    document.getElementById('outputTexto').value = textoConvertido;  
});