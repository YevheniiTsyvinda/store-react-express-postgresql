import React from 'react'
import {Card, Row} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedBrand } from '../store/reducers/deviceReducer'

const BrandBar = () => {
    const device = useSelector(state => state.device);
    const dispatch = useDispatch() 
  return (
    <Row className='d-flex'>
        {device.brands.map(brand => 
            <Card
                style={{cursor:'pointer',width: 'auto' }}
                key={brand.id}
                className="p-2"
                onClick={()=> dispatch(setSelectedBrand(brand)) }
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
        )}
    </Row>
  )
}

export default BrandBar