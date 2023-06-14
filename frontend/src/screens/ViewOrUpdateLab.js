import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export default function ViewOrUpdateLab() {
  //to get the id as params from the url
  const params = useParams();
  const [lab, setLab] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [technology, setTechnology] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/Labs/${params.id}`);
        setLab(data);
        setStartDate(moment(lab.startDate.split('T')[0]).format('YYYY-MM-DD'));
        setEndDate(moment(lab.endDate.split('T')[0]).format('YYYY-MM-DD'));
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, [endDate, lab.startDate, params.id, lab.endDate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (technology || endDate || startDate || name) {
        const { data } = await axios.put(`/api/Labs/${params.id}`, {
          name: name || lab.name,
          technology: technology || lab.technology,
          endDate: endDate || lab.endDate,
          startDate: startDate || lab.startDate,
        });
        navigate('/');
      } else {
        toast.error('No Changing !', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error('Ooops No Changing !', {
        position: toast.POSITION.TOP_CENTER,
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
          <h3 className="my-3 fw-bold">Update The Lab</h3>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={lab.name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="technology">
            <Form.Label>Technology</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={lab.technology}
              onChange={(e) => setTechnology(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue={startDate}
              required
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue={endDate}
              required
              placeholder="Here edit the release date"
              onChange={(e) => setEndDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button type="submit" className="btn_add_to_chart mt-2">
              Update Lab
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
