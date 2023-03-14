import './App.css';

function ProductsList({ products }) {
    return (
        <div>
            {products.map((products) => (
                <div key={products.id}>
                    <div>{products.isOnSale ? <div>{products.title}: {products.price} ON SALE</div> : <div>{products.title}: {products.price}</div>}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ConditionalRendering() {
    const products = [
        { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
        { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
        { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
        { id: 3, title: 'Water', price: 15.99, isOnSale: true },
      ];

    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
  }
  
  export default ConditionalRendering;