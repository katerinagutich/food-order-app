import React from 'react';
import mealsImage from '../../assets/meals2.jpg';
import styles from './Image.module.css';

const Image = () => {
    return (
        <div className={styles['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food"/>
        </div>
    );
};

export default Image;