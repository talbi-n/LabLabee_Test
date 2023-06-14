import React from 'react';
import Card from 'react-bootstrap/Card';
export default function LabComponent(props) {
  const { lab } = props;
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
        </Card.Body>
      </Card>
    </div>
  );
}
