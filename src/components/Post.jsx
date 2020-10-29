import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <>
        <div>
          <span>{post.text}</span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
