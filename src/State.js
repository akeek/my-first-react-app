import './App.css';
import { useState } from 'react';


function Product() {
    return <div></div>;
}

function State() {
    const [productTitle, setProductTitle] = useState('Milk');
    const [productTitle2, setProductTitle2] = useState('Cheese');


    function swapValues() {
        setProductTitle(productTitle2);
        setProductTitle2(productTitle);
    }

    return (
        <div>
            <div>Product: {productTitle}
                <Product />
                <button onClick={swapValues}>Change</button>
            </div>
        </div>
    );
}

export default State;