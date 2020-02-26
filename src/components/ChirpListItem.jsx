import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { FaUserNinja } from "react-icons/fa";

const ChirpListItem = props => {
    return (
      <ListGroup.Item
        className="d-flex justify-content-between align-items-center"
      >
        <b>
          <FaUserNinja
            size="2rem"
            className="border rounded-circle border-dark" /> {props.chirp.username}:
        </b>
        <span>{props.chirp.message}</span>
      </ListGroup.Item>
    );
}

export default ChirpListItem;