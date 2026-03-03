// A Lista de convidados pets
const pets = ["Jorge", "Joaquim", "Mikaelly", "Laura", "Nicole", "Thamily"];
const listaUl = document.getElementById('lista-pets');

// Lógica de filtragem: Apenas nomes > 5 letras
// Simulando a função RANGE percorrendo o array
for (let i = 0; i < pets.length; i++) {
    let nomePet = pets[i];
    
    if (nomePet.length > 5) {
        let li = document.createElement('li');
        li.className = 'pet-item';
        li.textContent = nomePet;
        listaUl.appendChild(li);
    }
}

// Fazendo o botão funcionar
document.getElementById('btn-verificar').onclick = function() {
    const itensVisiveis = document.querySelectorAll('.pet-item');
    let contador = 0;

    itensVisiveis.forEach(pet => {
        // Verifica se o nome possui a letra "A"
        if (pet.textContent.toLowerCase().includes('a')) {
            pet.classList.add('brilho'); // Ativa o CSS de brilho
            contador++;
        }
    });

    // Mostra o placar com o total
    const infoPlacar = document.getElementById('placar');
    document.getElementById('valor').textContent = contador;
    infoPlacar.classList.remove('hidden');
};
