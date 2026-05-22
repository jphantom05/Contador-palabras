const textarea = document.getElementById('cajaTexto');
const numPalabras = document.getElementById('numPalabras');
const numCaracteres = document.getElementById('numCaracteres');

textarea.addEventListener('input', () => {
    const textoOriginal = textarea.value;
    const textoLimpio = textoOriginal.trim();
    
    // 2. Calculamos las palabras
    const palabras = textoLimpio.split(/\s+/).filter(palabra => palabra.length > 0);
    
    // 3. Revisamos si el usuario ha escrito algo real
    if (textoOriginal.length > 0) {
        // Si hay texto, le quitamos la clase 'oculto' a ambos para que aparezcan
        numPalabras.classList.remove('oculto');
        numCaracteres.classList.remove('oculto');
        
        // Pintamos los resultados en la pantalla
        numPalabras.textContent = palabras.length;
        numCaracteres.textContent = textoOriginal.length; // Cuenta todo, incluyendo espacios
    } else {
        // Si el cuadro queda completamente vacío, los volvemos a ocultar
        numPalabras.classList.add('oculto');
        numCaracteres.classList.add('oculto');
    }
});
    
