import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    
    return (
        <Row className='d-flex flex-row flex-wrap' style={{ flexWrap: 'wrap' }}>
            {device.brands.map(brand => 
                <Card
                    key={brand.id}
                    className='p-3 mb-2'
                    style={{width: 'auto', cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'white'}
                    onClick={() => device.setSelectedBrand(brand)}    
                >
                    {brand.name}  
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;


