import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		price: 6,
		quantity: 1,
		name: 'first book',
		description: 'my first bppk hata my afn',
	},
	{
		id: 'p2',
		price: 7,
		quantity: 2,
		name: 'second book',
		description: 'my second book that i don;t know when i add',
	},
];
const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem
						key={product.id}
						id={product.id}
						title={product.name}
						price={product.price}
						description={product.description}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
