import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { setSelectedType } from '../store/reducers/deviceReducer';

const TypeBar = () => {
    const device = useSelector(state => state.device);
    const dispatch = useDispatch();

    return (
        <ListGroup>
            {device.types.map(type =>
            <ListGroup.Item 
                style={{cursor: 'pointer'}}
                active={type.id === device.selectedType.id}
                onClick={() => dispatch(setSelectedType(type))}
                key={type.id}>
                {type.name}
            </ListGroup.Item>)}
        </ListGroup>
    )
}

export default TypeBar