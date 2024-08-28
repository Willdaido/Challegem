// Função para criptografar o texto
function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Função para descriptografar o texto
function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Ligar as funções aos botões
document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const outputText = encrypt(inputText);
    mostrarResultado(outputText);
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const outputText = decrypt(inputText);
    mostrarResultado(outputText);
});

document.getElementById("copy-btn").addEventListener("click", function() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
});

// Função para exibir o resultado e ocultar a imagem
function mostrarResultado(texto) {
    document.getElementById("placeholder-image").style.display = 'none';
    const outputTextArea = document.getElementById("output-text");
    outputTextArea.style.display = 'block';
    outputTextArea.value = texto;
}
