import React,{useState} from 'react'
import {Modal,Form,Button, Dropdown,Row,Col} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'

const CreateDevice = ({show,onHide}) => {
    const device = useSelector(state => state.device);
    const [info,setInfo] = useState([]);

    const addInfo = ()=>{
        setInfo([...info,{title:'',description:'',number: Date.now()}])
    }

    const removeInfo = (number)=>{
        setInfo(info.filter(i=> i.number !== number))
    }

  return (
    <Modal
    show={show}
    onHide={onHide}
    centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add device
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Form.Control
                placeholder={"Enter name of device"}
            />
            <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Sellect type</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>Sellect brand</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control className='mt-3' placeholder={"device name"} />
                <Form.Control className='mt-3' placeholder={"price"} type="number" />
                <Form.Control className='mt-3' type="file" />
                <hr/>
                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                >Add new device
                </Button>
                {info.map(i =>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Form.Control placeholder='property name' />
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder='description' />
                        </Col>
                        <Col md={4}>
                            <Button 
                            onClick={()=> removeInfo(i.number)}
                            variant={'outline-danger'}>Delete</Button>
                        </Col>
                    </Row>)}
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
    </Modal.Footer>
</Modal>
  )
}

export default CreateDevice