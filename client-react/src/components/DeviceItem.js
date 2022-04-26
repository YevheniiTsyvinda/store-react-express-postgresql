import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Col, Card, Image} from 'react-bootstrap'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
    let navigate = useNavigate();
  return (
    <Col md={3} className="mt-3" onClick={()=> navigate(DEVICE_ROUTE+ '/'+ device.id)}>
        <Card style={{width: 150,cursor: 'pointer'}} border="light">
            <Image width={150} height={150} src={device.img} />
            <div className="text-black-50 d-flex justify-content-between align-items-center">
                <div>Samsung...</div>
                <div className='d-flex align-items-centr'>
                    <div>{device.rating}</div>
                    <Image width={20} height={20} src={star} />
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    </Col>
  )
}

export default DeviceItem