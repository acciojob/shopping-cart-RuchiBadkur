//your code here
document.getElementById('add').addEventListener('click', function() {
    var itemName = document.getElementById('item-name-input').value;
    var itemPrice = parseFloat(document.getElementById('item-price-input').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        var newRow = document.createElement('tr');
        var itemNameCell = document.createElement('td');
        itemNameCell.textContent = itemName;
		itemNameCell.id = "item";
        var itemPriceCell = document.createElement('td');
		itemPriceCell.id="price";
        itemPriceCell.textContent = itemPrice.toFixed(2);
        newRow.appendChild(itemNameCell);
        newRow.appendChild(itemPriceCell);
        document.getElementById('cart-items').insertBefore(newRow, document.getElementById('grand-total-row'));

        var total = parseFloat(document.getElementById('grand-total').textContent);
        total += itemPrice;
        document.getElementById('total').textContent = total.toFixed(2);

        document.getElementById('item-name-input').value = '';
        document.getElementById('item-price-input').value = '';
    }
});