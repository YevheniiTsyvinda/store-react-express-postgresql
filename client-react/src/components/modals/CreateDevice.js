import React,{useEffect, useState} from 'react'
import {Modal,Form,Button, Dropdown,Row,Col} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { fetchTypes, fetchBrands, createDevice } from '../../http/deviceAPI';
import { setBrands, setSelectedType, setSelectedBrand, setTypes } from '../../store/reducers/deviceReducer';

const CreateDevice = ({show,onHide}) => {
    const device = useSelector(state => state.device);
    const dispatch = useDispatch();

    const [info,setInfo] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);



    useEffect(()=>{
        fetchTypes().then(data => dispatch(setTypes(data)));
        fetchBrands().then(data => dispatch(setBrands(data)));
    },[]);

    const addInfo = ()=>{
        setInfo([...info,{title:'',description:'',number: Date.now()}])
    }

    const removeInfo = (number)=>{
        setInfo(info.filter(i=> i.number !== number))
    }

    const changeInfo = (key,value, number) =>{
        setInfo(info.map(i => i.number === number ? {...i,[key]:value} : i));
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    const addDevice = ()=>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
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
                    <Dropdown.Toggle>{ device.selectedType.name||"Sellect type"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                        <Dropdown.Item 
                        key={type.id}
                        onClick={()=> dispatch(setSelectedType(type))}
                        >{type.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{ device.selectedBrand.name ||"Sellect brand"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                        <Dropdown.Item 
                        onClick={()=> setSelectedBrand(brand)}
                        key={brand.id}
                        >
                            {brand.name}
                        </Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='mt-3'
                    placeholder={"device name"} />
                <Form.Control
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                className='mt-3'
                 placeholder={"price"} 
                 type="number" />
                <Form.Control
                    onChange={selectFile}
                className='mt-3' type="file" />
                <hr/>
                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                >Add new device
                </Button>
                {info.map(i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control
                            onChange={e => changeInfo('title',e.target.value, i.number)}
                            placeholder='property name' />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                            onChange={e => changeInfo('description',e.target.value, i.number)}
                            placeholder='description' />
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
        <Button variant="outline-success" onClick={addDevice}>Add</Button>
    </Modal.Footer>
</Modal>
  )
}

export default CreateDevice