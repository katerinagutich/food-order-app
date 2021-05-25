import React, {Fragment} from 'react';
import Image from './Image';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Meals</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <Image/>
        </Fragment>
    );
};

export default Header;