import React,{useState, useEffect} from 'react'
import { Card, Col, Row, Container, Image, Button } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'
import {addToBasket} from '../http/basketAPI' 

const DevicePage = () => {

    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(()=>{
        fetchOneDevice(id).then(data => setDevice(data))
    },[])

    const addDeviceToBasket= ()=>{
        addToBasket(id).then(data => {console.log(data)})
    };

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device?.id && process.env.REACT_APP_API_URL + device?.img} />
                </Col>
                <Col md={4}>
                    <Row className='d-flex align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240, height: 240, backgroundSize: 'cover', fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card 
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize:32,border:'5px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button 
                            variant={"outline-dark"}
                            onClick={()=> addDeviceToBasket()}
                        >Add to Basket</Button>
                    </Card>
                </Col>

            </Row>
            <Row>
                <h1>Characteristics</h1>
                {device.info.map((info,index)=>
                    <Row key={info.id} 
                        style={{background: index % 2 === 0 ? 'lightgray':'transparent',
                        padding:10}}>
                            {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage