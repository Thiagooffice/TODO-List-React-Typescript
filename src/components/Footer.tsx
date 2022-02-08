import * as React from 'react';
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
        <p>
          <span>React + TS TODO</span> @ 2021
        </p>
    </footer>
  );
}
