import React from 'react';

import MyImage from '../../assets/shafik.jpg';
import styles from './About.module.css';


export default function MediaCard() {

    return (
        <div className={styles.about}>
            <img src={MyImage} alt="" className={styles.image}/>
            <div>
                <h2 className={styles.name}>MSI Shafik</h2>
            </div>
            <div>
                <p className={styles.des}>(Software Engineer)</p>
            </div>
        </div>

    );
}