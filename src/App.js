import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import axios from 'axios';
import TableComponent from './Table';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       salary: '',
       hobby: '',
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/0e559cc0-9dac-4f1c-a921-85789816f72e', this.state)
    .then(response => {
      this.setState(response.data)
    })
  }

  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid className="container" align="center">
        
        <TableComponent />

        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field>
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}