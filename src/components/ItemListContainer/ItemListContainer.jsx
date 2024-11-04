import { useEffect, useState } from "react";
import { products } from "../../data/products";
import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.css";

let task = new Promise((res, rej) => {
	setTimeout(() => {
		res(products);
	}, 2000);
});

export const ItemListContainer = () => {
	const [myProducts, setMyProducts] = useState([]);
	console.log(myProducts);

	useEffect(() => {
		task.then((resp) => {
			setMyProducts(resp);
		})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				console.log("Finally");
			});
	}, []);

	return (
		<section className="container--ItemListContainer">
			<div className="container--cards">
				<ItemList myProducts={myProducts} />
			</div>
		</section>
	);
};
