// Lista de convidados
const pets = ["Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily"];
const listaUl = document.getElementById('lista-pets');

// 1. Lógica RANGE + FILTRO (> 5 letras)
// Coloca os nomes na tela assim que a página carrega
for (let i = 0; i < pets.length; i++) {
    let nome = pets[i];
    
    if (nome.length > 5) {
        let li = document.createElement('li');
        li.className = 'pet-item';
        li.textContent = nome;
        listaUl.appendChild(li);
    }
}

// 2. Fazendo o BOTAO funcionar ao clicar
document.getElementById('btn-verificar').onclick = function() {
    const itens = document.querySelectorAll('.pet-item');
    let contador = 0;

    // Loop para verificar quem tem a letra "A"
    itens.forEach(item => {
        // Se o nome contiver 'a' ou 'A'
        if (item.textContent.toLowerCase().includes('a')) {
            item.classList.add('brilho-ouro'); // Faz brilhar
            contador++;
        }
    });

    // Mostra o resultado final
    const placar = document.getElementById('placar');
    document.getElementById('resultado').textContent = contador;
    placar.style.display = 'block';
};
