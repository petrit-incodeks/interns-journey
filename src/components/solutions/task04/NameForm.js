import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lastName: "", isSubmitted: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitted: true });
    setTimeout(() => {
      this.setState({ name: "", lastName: "", isSubmitted: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
        {this.state.isSubmitted && (
          <p>{`${this.state.name} ${this.state.lastName}`}</p>
        )}
      </div>
    );
  }
}
export default NameForm;
