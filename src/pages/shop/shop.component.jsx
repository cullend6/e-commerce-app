import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from '../../data/shop.data';

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div>
                {
                    collections.map(({ id, ...otherCollectionInfo  }) => (
                        <CollectionPreview key={id} {...otherCollectionInfo} />
                    ))
                }
            </div>
        )
    }
}
