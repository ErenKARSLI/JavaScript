class Product {
    constructor(name, category, quantity) {
        this.name = name;
        this.category = category;
        this.quantity = quantity;
    }

    addStock(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.quantity += amount;
        }
    }
}

const products = [];

function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    productNameSelect.innerHTML = '';

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.innerText = product.name;
        productNameSelect.appendChild(option);
    });
}

function populateCategoryOptions() {
    const categorySelects = document.querySelectorAll('.panel select#category');
    categorySelects.forEach(select => {
        select.innerHTML = '';
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.category;
            option.innerText = product.category;
            select.appendChild(option);
        });
    });
}

populateProductOptions();

function showAddProductPanel() {
    document.getElementById('addProductPanel').style.display = 'block';
}

function hideAddProductPanel() {
    document.getElementById('addProductPanel').style.display = 'none';
}

function addProduct() {
    const productName = document.getElementById('productName').value.trim();
    const category = document.getElementById('category').value;

    if (productName !== '') {
        const existingProduct = products.find(product => product.name.toLowerCase() === productName.toLowerCase());
        if (!existingProduct) {
            const newProduct = new Product(productName, category, 0);
            products.push(newProduct);
            populateProductOptions();
            populateCategoryOptions();
        } else {
            alert('Bu ürün zaten eklenmiş.');
        }
    } else {
        alert('Lütfen geçerli bir ürün adı girin.');
    }
}

function showAddStockPanel() {
    document.getElementById('addStockPanel').style.display = 'block';
    populateCategoryOptions();
}

function hideAddStockPanel() {
    document.getElementById('addStockPanel').style.display = 'none';
}

function addStock() {
    const selectedCategory = document.getElementById('category').value;
    const selectedProduct = products.find(product => product.category === selectedCategory);
    const stockAmount = parseInt(document.getElementById('stockAmount').value);

    if (selectedProduct && !isNaN(stockAmount) && stockAmount > 0) {
        selectedProduct.addStock(stockAmount);
        updateTotalStock();
    }

    hideAddStockPanel();
}

function updateTotalStock() {
    const totalStockElement = document.getElementById('totalStock');
    const totalStock = products.reduce((total, product) => total + product.quantity, 0);
    totalStockElement.innerText = totalStock;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideAddProductPanel();
        hideAddStockPanel();
    }
});
