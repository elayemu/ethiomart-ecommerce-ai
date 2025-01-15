import React from 'react';

function Cart({ items, removeItem }) {
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;