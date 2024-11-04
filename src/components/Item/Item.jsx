// import { ItemCount } from "../ItemCount/ItemCount";
import "./item.css";

export const Item = ({ item }) => {
	return (
		<div className='card'>
			<h3 className='card--title'>{item.title}</h3>
			<img className='card--img' src={item.img} alt={item.title} />
			<div className='card--price'>$ {item.price}</div>
			{/* <ItemCount stock={item.stock} /> */}
			<a className='card--more'>
				Ver Mas
			</a>
		</div>
	);
};
