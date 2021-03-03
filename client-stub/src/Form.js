import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.title;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { title  } = this.state;
    await axios.post(
      'https://mbik71f8y4.execute-api.us-west-1.amazonaws.com/dev/auction',
      { title: `${title}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>title:</label>
          <input
            type="text"
            title="title"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
