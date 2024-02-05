import { FetchedItem } from 'api';
import { Row, Title } from 'components/common';
import React from 'react';

import { classname } from 'utils';
import { ProductTable } from './product-table';
import { ProductImage } from './product-image';
import { ProductSizeAndQuantity } from './product-size-and-quality';

type ProductProps = {
    product: FetchedItem;
};

const cn = classname('catalog-item');

export const Product = ({ product }: ProductProps) => {
    const { title, images } = product;

    return (
        <section className={cn()}>
            <Title text={title} />
            <Row>
                <ProductImage alt={title} url={images} />
                <div className='col-7'>
                    <ProductTable product={product} />
                    <ProductSizeAndQuantity />
                </div>
            </Row>
        </section>
    );
};
