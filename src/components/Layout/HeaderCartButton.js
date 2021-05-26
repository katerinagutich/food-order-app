import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const ctx = useContext(CartContext);
    const {items} = ctx;

    const cartItemsNumber = items.reduce((curNumber, item) => {
       return curNumber += item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        },300);

        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
};

export default HeaderCartButton;