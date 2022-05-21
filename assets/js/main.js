const navMenu = document.querySelector('.navbar-items');
const navItem = document.querySelectorAll('.navbar-items a');
const productsList = document.querySelector('.products-list');

function toggleMenu() {
	if (navMenu.classList.contains('hidden')) {
		navMenu.classList.remove('hidden'); 
	} else {
		navMenu.classList.add('hidden'); 
	}
}

function activateSection() {
	productsList.innerHTML = '';
	navItem.forEach(item => item.classList.remove('active'));
	this.classList.add('active');
	toggleMenu();

	fetch("assets/json/products.json")
		.then(res => res.json())
		.then(data => {
			for (const key in data) {
				if (key === this.id) {
					const products = data[key];
					products.forEach(product => {
						productsList.innerHTML += `
							<section class="product-item">
								<h1>${product.nome}</h1>
								<img src=${product.img} alt=${product.name} loading="lazy" />
								<a href="https://shopee.com.br/sublimeartespersonalizadas">Informações</a>
							</section>
							`;
					});
				}
			};
		});
}

navItem.forEach(item => item.addEventListener('click', activateSection));

// Load all products
fetch("assets/json/products.json")
	.then(res => res.json())
	.then(data => {
		for (const key in data) {
			const products = data[key];

			products.forEach(product => {
				productsList.innerHTML += `
					<section class="product-item">
						<h1>${product.nome}</h1>
						<img src=${product.img} alt=${product.name} />
						<a href="https://shopee.com.br/sublimeartespersonalizadas">Informações</a>
					</section>
					`;
			});
		};
	});
