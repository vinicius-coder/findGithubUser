import React from 'react';
import './styles.scss';

type Props = {
    text: String;
}

const ButtomIcom = ({ text }: Props) => (
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
);

export default ButtomIcom;