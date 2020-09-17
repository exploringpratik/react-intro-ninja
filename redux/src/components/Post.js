import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div className="container">
                <h4>{this.props.post.body}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)