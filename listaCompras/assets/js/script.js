// Selecionar os elementos do DOM
const inputField = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingList = document.getElementById('shoppingList');
const removeItemBtn = document.getElementById('removeItemBtn');

// Função para adicionar um novo item à lista
addItemBtn.addEventListener('click', function() {
    const itemText = inputField.value.trim(); // Captura o valor do input e remove espaços em branco
    if (itemText !== '') {
        const listItem = document.createElement('li'); // Cria um novo item de lista (li)
        const checkbox = document.createElement('input'); // Cria uma checkbox
        checkbox.type = 'checkbox';

        const label = document.createElement('label'); // Cria um label para o texto do item
        label.textContent = itemText;

        // Adiciona checkbox e label ao item de lista
        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        // Adiciona o novo item de lista à lista de compras
        shoppingList.appendChild(listItem);

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
            shoppingList.removeChild(item); // Remove o item se a checkbox estiver marcada
        }
    });
});
