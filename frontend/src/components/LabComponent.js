import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
export default function LabComponent(props) {
  const { lab } = props;
  const navigate = useNavigate();
  //handle delete Lab
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/Labs/${lab._id}`);
      toast.success('Successfully deleted  !', {
        position: toast.POSITION.TOP_CENTER,
      });
      window.location.reload(false);
    } catch (err) {
      toast.error('Error  !', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div>
      <Card style={{ width: '20rem', margin: 'auto' }} className="card_Lab">
        <Card.Body>
          <Card.Text>
            <b>Id : </b>
            {lab._id}
          </Card.Text>
          <hr />
          <Card.Text>
            <b>Name : </b>
            {lab.name}
          </Card.Text>
          <hr />
          <Card.Text>
            <b>Technology : </b>
            {lab.technology}
          </Card.Text>
          <hr />
          <Card.Text>
            <b>Start Date : </b>
            {lab.startDate}
          </Card.Text>
          <hr />
          <Card.Text>
            <b>End Date : </b>
            {lab.endDate}
          </Card.Text>
          <div className="action">
            <button
              className="actionButton DeleteButton"
              onClick={() => handleDelete(lab._id)}
            >
              Delete
            </button>
            <button
              className="actionButton SuccessButton mx-2"
              onClick={() => {
                navigate(`/viewOrUpdateLab/${lab._id}`);
              }}
            >
              View Or Update
            </button>
          </div>
          <ToastContainer />
        </Card.Body>
      </Card>
    </div>
  );
}
