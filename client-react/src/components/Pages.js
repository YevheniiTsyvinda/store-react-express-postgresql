import React from 'react'
import { Pagination } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../store/reducers/deviceReducer'

const Pages = () => {
    const device = useSelector(state => state.device);
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []
    const dispatch = useDispatch();
    for (let index = 0; index < pageCount; index++) {
        pages.push(index + 1)
        
    }

    return (
        <Pagination>
            {pages.map( page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() =>dispatch(setPage(page))}
                >
                    {page}
                </Pagination.Item>)}
        </Pagination>
    )
}

export default Pages