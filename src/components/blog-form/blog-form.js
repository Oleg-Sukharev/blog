import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithBlogService from '../HOC/with-blog-service';
import { compose } from "../../utils";
import Button from '../UI/button';
import { fetchPostCommit } from "../../actions";

import classes from './blog-form.module.scss'

class BlogForm extends Component {
    state = {
        message: ''
    }

    handleChange = (value) => {
        this.setState({ message: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchPostCommit(this.state.message)();
        this.state.message = '';
    };

    render() {

        return (
            <div className={classes.blogForm}>
                <h2>Post Comments</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={(e) => this.handleChange(e.target.value.trim())}
                        required
                        rows="4"
                        placeholder="your comment"
                    />
                    <Button type="success"
                        disabled={!this.state.message}
                    >Submit Comment</Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (props) => {
    return { props }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { blogService, itemId } = ownProps;
    return {
        fetchPostCommit: (data) => fetchPostCommit(blogService, dispatch, itemId, data)
    }
}

export default compose(
    WithBlogService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BlogForm)
