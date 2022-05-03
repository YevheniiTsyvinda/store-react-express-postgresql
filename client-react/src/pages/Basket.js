import React, { useEffect } from 'react'
import { Table, Image, Button, Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setDevices } from '../store/reducers/basketReducer'
import { getAll, remove } from '../http/basketAPI'

const Basket = () => {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        remove(id)
        .then(removed => {
            getAll()
            .then(data => {
                dispatch(setDevices(data))
            })
        })

    };

    useEffect(() => {
        getAll()
            .then(data => {
                dispatch(setDevices(data))
            })
    }, [])

    // useEffect(()=>{
    //     getAll()
    //     .then(data => {
    //         dispatch(setDevices(data))
    //     }) 
    // },[basket.devices]);

    return (
        <div className='pt-3 ps-5 pe-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Device</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {basket.devices?.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <Image width={100} height={100} src={process.env.REACT_APP_API_URL + item?.device?.img} />
                            </td>
                            <td>{item.device.name}</td>
                            <td>{item.device.price}</td>
                            <td>
                                <Button variant="danger"
                                    onClick={() => { deleteItem(item.id) }}
                                >Remove</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            <Alert variant="success">
                <h5>Total: {
                    basket.devices?.map(x => x.device.price)
                        .reduce((sum, current) => {
                            return sum + current;
                        }, 0)
                }</h5>
            </Alert>
        </div>
    )
}

export default Basket