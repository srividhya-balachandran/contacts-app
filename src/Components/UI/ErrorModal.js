import React from 'react';
import styles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal=props=>{
    return (
    
        <div>
            <div className={styles.backdrop} />
            <Card  className={styles.modal}>
            <header className={styles.header}>
            <h2> {props.errorTitle}</h2>
            </header>

            <div classsName= {styles.content}>
                <p>{props.errorMessage}</p>
            </div>
            <footer className={styles.actions}>
            <Button   >Ok</Button> 
            </footer>
            
        </Card>
        </div>
    );
};

export default ErrorModal;