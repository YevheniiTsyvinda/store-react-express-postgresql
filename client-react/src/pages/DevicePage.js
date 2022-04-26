import React from 'react'
import { Card, Col, Row, Container, Image, Button } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 1, name: 'Iphone 12 Pro', price: 40000, rating: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXy4VHsrLyVPWDiqgF73cjLvMQP4LoTWDo_BbqxOBQzIsY-dc8lO5DYAO_VVXC0IKczg&usqp=CAU'
    };
    const description =[
        {id:1,title:'Ram',description: '5 gb'},
        {id:2,title:'Ram',description: '5 gb'},
        {id:3,title:'Ram',description: '5 gb'},
        {id:4,title:'Ram',description: '5 gb'},
        {id:5,title:'Ram',description: '5 gb'},
    ]


    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
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
                        <Button variant={"outline-dark"}>Add to Basket</Button>
                    </Card>
                </Col>

            </Row>
            <Row>
                <h1>Characteristics</h1>
                {description.map((info,index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray':'transparent',
                        padding:10}}>

                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage