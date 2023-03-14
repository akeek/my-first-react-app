import './App.css';

function ProductsList({ products }) {
    return (
        <div>
            {products.map((products) => (
                <div key={products.id}>{products.title}: {products.price}</div>
            ))}
        </div>
    );
}

function Map() {
    const products = [
        { id: 0, title: 'Bread', price: 19.99 },
        { id: 1, title: 'Milk', price: 29.99 },
        { id: 2, title: 'Cheese', price: 35.99 },
        { id: 3, title: 'Water', price: 15.99 },
    ];

    return (
        <div>
            <ProductsList products={products} />
        </div>
    )
}

export default Map;