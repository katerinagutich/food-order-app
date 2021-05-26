import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContex from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const ctx = useContext(CartContex);

    const cartItemsNumber = ctx.items.reduce((curNumber, item) => {
       return curNumber += item.amount;
    }, 0);

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
};

export default HeaderCartButton;