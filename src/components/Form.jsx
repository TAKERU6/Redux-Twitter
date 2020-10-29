import React, { Component } from "react";
import { connect } from "react-redux";
import { addPosts } from "../actions";

class Form extends Component {
  state = { text: "" };

  handleChange = (event) => this.setState({ text: event.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: "" });
  };

  render() {
    const { onSubmit } = this.props;
    return (
      <div>
        <form
          onSubmit={(e) => {
            const text = this.state.text;
            onSubmit(text);
            this.handleSubmit(e);
          }}
        >
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Tweet"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => dispatch(addPosts(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
