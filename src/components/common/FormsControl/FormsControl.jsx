import React from 'react';
import styles from './FormsControl.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            {hasError && <div className={styles.textError}><span>{meta.error}</span></div>}
            <Element {...input} {...props} />
        </div>
    );
};