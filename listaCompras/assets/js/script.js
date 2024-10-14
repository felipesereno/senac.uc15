// Selecionar os elementos do DOM
const inputField = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');
const removeItemBtn = document.getElementById('removeItemBtn');

// Função para verificar se o item já existe
function itemExists(itemText) {
    const listItems = shoppingList.querySelectorAll('li label');
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].textContent.toLowerCase() === itemText.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Função para adicionar um novo item à lista
addItemBtn.addEventListener('click', function() {
    const itemText = inputField.value.trim(); // Captura o valor do input e remove espaços em branco

    // Verifica se o item já existe
    if (itemExists(itemText)) {
        inputField.style.border = '2px solid red'; // Adiciona borda vermelha no input
        alert('O item já existe na lista de compras!');
    } else if (itemText !== '') {
        // Remove a borda vermelha caso o item seja válido
        inputField.style.border = '';

        // Cria um novo item de lista (li)
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = itemText;

        // Adiciona checkbox e label ao item de lista
        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        // Adiciona o novo item de lista à lista de compras
        shoppingList.appendChild(listItem);

        // Aplica a animação para o item aparecer suavemente
        setTimeout(function() {
            listItem.classList.add('show');
        }, 10);

        // Limpa o campo de input
        inputField.value = '';
    }
});

// Função para remover os itens selecionados
removeItemBtn.addEventListener('click', function() {
    const listItems = shoppingList.querySelectorAll('li'); // Seleciona todos os itens de lista

    listItems.forEach(function(item) {
        const checkbox = item.querySelector('input[type="checkbox"]'); // Seleciona a checkbox de cada item
        if (checkbox.checked) {
            // Aplica a animação de remoção
            item.classList.add('remove');

            // Espera a animação terminar para remover o item do DOM
            setTimeout(function() {
                shoppingList.removeChild(item);
            }, 500); // O tempo deve ser igual ao da transição CSS (0.5s)
        }
    });
});
