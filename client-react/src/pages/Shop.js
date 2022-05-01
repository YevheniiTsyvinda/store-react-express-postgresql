import React,{useEffect} from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import TypeBar from '../components/TypeBar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import { setBrands, setTypes, setDevices, setTotalCount } from '../store/reducers/deviceReducer'
import Pages from '../components/Pages'

const Shop = () => {
    const device = useSelector(state => state.device);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchTypes().then(data => dispatch(setTypes(data)));
        fetchBrands().then(data => dispatch(setBrands(data)));
        fetchDevices(null, null, 1, 2).then(data => {
            dispatch(setDevices(data.rows));
            dispatch(setTotalCount(data.count));
        });
    },[])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
            dispatch(setDevices(data.rows))
            dispatch(setTotalCount(data.count))
        })
    }, [device.page, device.selectedType, device.selectedBrand]);

    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList/>
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop