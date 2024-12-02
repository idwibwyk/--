let quantity = 0;
    const pricePerUnit = 100;

    function changeQuantity(amount) {
        quantity += amount;
        if (quantity < 0) quantity = 0; // Не допускаем отрицательное количество
        document.getElementById('quantity').innerText = quantity;
        document.getElementById('total').innerText = quantity * pricePerUnit;
}


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const flowerId = event.dataTransfer.getData("text");
    const flowerElement = document.getElementById(flowerId);

    // Создаем копию цветка для добавления в вазу
    const flowerCopy = document.createElement("div");
    flowerCopy.textContent = flowerElement.textContent;
    flowerCopy.classList.add("flower", "bouquet-flower"); // Добавляем класс для стилей
    
    // Позиционирование цветка в вазе
    const vase = document.getElementById("vase");
    const randomX = Math.random() * (vase.clientWidth - 50); // Random position within the vase
    const randomY = Math.random() * (vase.clientHeight - 50); // Random position within the vase
    flowerCopy.style.left = `${randomX}px`;
    flowerCopy.style.bottom = `${randomY}px`;

    // Добавляем цветок в вазу
    vase.appendChild(flowerCopy);
}  