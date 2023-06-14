import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import SpinnerComponent from '../components/SpinnerComponent';
import { Helmet } from 'react-helmet-async';
import { reducer } from '../reducers/homeReducer';
import Button from 'react-bootstrap/Button';
import LabComponent from '../components/LabComponent';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  //using Reducer Hook
  const [{ loading, error, labs }, dispatch] = useReducer(reducer, {
    loading: false,
    error: '',
    labs: [],
  });
  const navigate = useNavigate();
  //this useEffect is running only once when the page is loaded
  useEffect(() => {
    //fetchData c'est une fonction asynchrone
    const fetchData = async () => {
      //dispatch message :  we are loading data now --beffore requeting--to show spinner
      dispatch({ type: 'FETCH_REQUEST' });
      //send request
      try {
        const result = await axios.get('/api/Labs/');
        //dispatch : requesting with success
        dispatch({ type: 'FETCH_SUCCES', payload: result.data });
      } catch (err) {
        //failed if error
        toast.err('Error : ' + err);
      }
    };
    //now we must call the fetch data function
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>LabLabee</title>
      </Helmet>
      <div>
        <h1 className="h1_list_Labs">List of labs</h1>
        <Button
          type="button"
          className="btn_add mx-auto mb-3 mt-2"
          onClick={() => {
            navigate(`/AddNewLab`);
          }}
        >
          Add new Lab
        </Button>
        <div className="labs">
          {loading ? (
            <div className="loader">
              <SpinnerComponent />
            </div>
          ) : error ? (
            <ToastContainer />
          ) : (
            <Row className="mx-auto">
              {labs.map((lab) => {
                return (
                  <Col
                    key={lab._id}
                    sm={6}
                    lg={3}
                    md={6}
                    className="mb-3 mx-auto"
                  >
                    <LabComponent lab={lab}></LabComponent>
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
}
