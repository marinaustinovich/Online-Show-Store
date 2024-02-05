import React from 'react';
import { CartSection, OrderSection } from 'components';
import { useAppSelector } from 'store';
import { cartCountSelector } from 'store/products';

const CartPage = () => {
    const selectedProductsCount = useAppSelector(cartCountSelector);

    return (
        <>
            <CartSection />
            {selectedProductsCount > 0 && <OrderSection />}
        </>
    );
};

export default CartPage;
