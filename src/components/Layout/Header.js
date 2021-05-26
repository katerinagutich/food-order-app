import React, {Fragment} from 'react';
import Image from './Image';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Delicious Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <Image/>
        </Fragment>
    );
};

export default Header;