import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class Posts extends Component {
  render() {
    return (
      <span>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </span>
    );
  }
}

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Posts);
