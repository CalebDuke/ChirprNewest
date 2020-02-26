import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FaFeather } from "react-icons/fa";
import ChirpListItem from "./components/ChirpListItem"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
      chirps: [
        {
          username: "Josh Hurn",
          message: "You are a great coder."
        },
        {
          username: "Caleb Duke",
          message: "Thanks man, that means a lot coming from you."
        },
        {
          username: "Josh Hurn",
          message: "ha, jk"
        }
      ]
    };
  }

  handleUsernameChange = e => this.setState({ username: e.target.value });
  handleMessageChange = e => this.setState({ message: e.target.value });
  handleChirpSubmit = e => {
      e.preventDefault();
      console.log(this.state)
      this.setState({
          username: "",
          message: "",
          chirps: [...this.state.chirps, {
              username: this.state.username,
              message: this.state.message
          }]
      });
  }

  render() {
    return (
      <Container>
        <Row className="mt-2">
          <Col md={5}>
            <Form className="form-group p-3 shadow-sm">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={this.state.username}
                onChange={this.handleUsernameChange}
                type="text"
              />
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                value={this.state.message}
                onChange={this.handleMessageChange}
                rows={7}
              />
              <Button
                variant="primary"
                block
                onClick={this.handleChirpSubmit}
                className="mt-3">
                <FaFeather /> Chirpy Boi
              </Button>
            </Form>
          </Col>
          <Col md={7}>
            <ListGroup variant="flush">
              {this.state.chirps.map((chirp, i) => {
                return (
                  <ChirpListItem key={`chirp-item-${i}`} chirp={chirp} />
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
