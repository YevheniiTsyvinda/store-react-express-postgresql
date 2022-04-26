import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Row} from 'react-bootstrap'
import DeviceItem from './DeviceItem';


const DeviceList = () => {
    
    const device = useSelector(state => state.device);
    const dispatch = useDispatch() 
  return (
    <Row className='d-flex'>
        {device.devices.map(device => (
            <DeviceItem key={device.id} device={device} />
        ))}
    </Row>
  )
}

export default DeviceList