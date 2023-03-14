import './App.css';
import { useState } from 'react';


function Product() {
    return <div></div>;
}

function State() {
    let [productTitle, setProductTitle] = useState('Milk');

    function onButtonClick() {
        setProductTitle(productTitle = 'Cheese')
    }

    return (
        <div>
            <div>Product: {productTitle}
                <Product />
                <button onClick={onButtonClick}>Change</button>
            </div>
        </div>
    );
}

export default State;