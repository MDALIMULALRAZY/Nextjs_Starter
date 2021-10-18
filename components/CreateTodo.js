import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../store/actions/actionCreator";
import styles from '../styles/About.module.scss';
import { Container, InputGroup, FormControl, Col, Row, Button } from 'react-bootstrap';

class CreateTodo extends React.Component {
  state = {
    todoText: ""
  };

  onChangeTodoText = event => {
    this.setState({
      todoText: event.target.value
    });
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="create-todo">
        <Container>
          <Row>
            <Col md="auto">
              <div className="card-title">
                <h1> Create Todo </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="form-wrapper">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">todo here</InputGroup.Text>
                  <FormControl
                    placeholder="Create todo here"
                    aria-describedby="basic-addon1"
                    value={todoText}
                    aria-label="Default"
                    onChange={this.onChangeTodoText}
                  />
                </InputGroup>
              </div>
            </Col>
            <Col>
              <Button
                danger
                variant="danger"
                className={styles.buttonmargin}
                onClick={() => {
                  this.setState({ todoText: "" });
                }}
              >
                Cancel
              </Button>
              <Button
                variant="info"
                onClick={() => {
                  if (this.state.todoText.length > 0) {
                    this.props.addTodo(this.state.todoText);
                    this.setState({ todoText: "" });
                  }
                }}
              >
                Add Todo
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);