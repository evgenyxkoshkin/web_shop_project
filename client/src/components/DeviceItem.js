import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className='mt-3 p-0' onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border='white'>
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + device.img}
                    style={{ border: 'none', boxShadow: 'none' }}
                    className="img-fluid"
                />
                <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                    <div>{device.name}</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={'18px'} height={'18px'} src={star} />
                    </div>
                </div>
                <div>{device.price + ' ₽'}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;

