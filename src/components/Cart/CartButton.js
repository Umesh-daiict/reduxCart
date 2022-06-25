import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const total = useSelector((state) => state.cart.total);
	const dispayHandler = () => {
		dispatch(uiAction.toogle());
	};
	return (
		<button className={classes.button} onClick={dispayHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{total}</span>
		</button>
	);
};

export default CartButton;
