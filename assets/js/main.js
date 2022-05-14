import { products } from "./products.js";

const navItem = document.querySelectorAll('.navbar ul li a');
const productsList = document.querySelector('.products-list');

function activateSection() {
	productsList.innerHTML = '';
	navItem.forEach(item => item.classList.remove('active'));
	this.classList.add('active');

	products.forEach(product => {
		if (product.type.toLowerCase() === this.id) {
			productsList.innerHTML += `
			<section class="product-item">
				<h1>${product.name}</h1>
				<img src=${product.img} alt=${product.name} />
				<a href="https://shopee.com.br/sublimeartespersonalizadas">Informações</a>
			</section>
			`;
		}
	})
}

products.forEach(product => {
	productsList.innerHTML += `
	<section class="product-item">
		<h1>${product.name}</h1>
		<img src=${product.img} alt=${product.name} />
		<a href="https://shopee.com.br/sublimeartespersonalizadas">Informações</a>
	</section>
	`;
})

navItem.forEach(item => {
	item.addEventListener('click', activateSection);
})
