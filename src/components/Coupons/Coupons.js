import React, { useState } from 'react';

function Coupons({ applyCoupon }) {
    const [couponCode, setCouponCode] = useState('');

    const handleApply = () => {
        applyCoupon(couponCode);
    };

    return (
        <div>
            <input 
                type="text" 
                value={couponCode} 
                onChange={e => setCouponCode(e.target.value)} 
                placeholder="Enter coupon code"
            />
            <button onClick={handleApply}>Apply</button>
        </div>
    );
}

export default Coupons;
