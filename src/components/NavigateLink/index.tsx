import React from 'react';
import styles from './index.module.scss';
import classNames from "classnames";
import { Link } from 'react-router-dom';

type TNavigateLink = {
    className?: string;
    text: string;
    to: string;
}
const NavigateLink = ({className, text, to}: TNavigateLink) => {
    return (
        <Link to={to} className={classNames(styles.navLink, className)}>{text}</Link>
    );
}

export default NavigateLink;
