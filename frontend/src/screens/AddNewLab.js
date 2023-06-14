import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddNewLab() {
  //this is the variables of Form to add new Lab and there state using useState Hook
  const [name, setName] = useState('');
  const [technology, setTechnology] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const navigate = useNavigate();

  //onSubmit function handler --> send request to backend to create new Lab
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (startDate < endDate) {
      //the start date must be lower then endDate
      try {
        await axios.post('/api/Labs', {
          name: name,
          technology: technology,
          startDate: startDate,
          endDate: endDate,
        });
        toast.success('Lab created ');
        navigate('/');
      } catch (err) {
        toast.error('error during creation of new Lab because Of : ' + err);
      }
    } else {
      toast.error('Start date must be higher than end date!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <div>
      <Container className="small-container">
        <Helmet>
          <title>Create New Lab</title>
        </Helmet>

        <Form onSubmit={handleSubmit} className="card_Lab signinForm">
          <h3 className="my-3 fw-bold">Create New Lab</h3>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="technology">
            <Form.Label>Technology</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setTechnology(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => setStartDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => setEndDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button type="submit" className="btn_add_to_chart mt-2">
              Create Lab
            </Button>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />{' '}
        </Form>
      </Container>
    </div>
  );
}
