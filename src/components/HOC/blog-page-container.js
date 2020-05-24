import React, { Component } from 'react';
import BlogPage from '../blog-page';
import Spinner from '../UI/spinner';
import  ErrorIndicator  from "../UI/error-indicator";
import WithBlogService  from './with-blog-service';
import { connect } from 'react-redux';
import {  compose } from "../../utils";
import { fetchPost} from "../../actions";

class BlogPageContainer extends Component {
    componentWillMount(){
        this.props.fetchPost();
    }

    render() {
        const { post={}, loading, error,itemId} = this.props;
        if (loading)  return  <Spinner/>
        if(error) return  <ErrorIndicator/>
        return  (
            <BlogPage post={post} itemId={itemId}/>
        )
    }
}

const mapStateToProps = ( { postItem: { post,loading, error} }) => {
    return{ post, loading, error }
}

const mapDispatchToProps = (dispatch,ownProps) =>  {
    const {blogService,itemId} = ownProps;
    return {
        fetchPost: fetchPost(blogService,dispatch,itemId)
    }
}

export default compose (
    WithBlogService(),
    connect(mapStateToProps,mapDispatchToProps)
)(BlogPageContainer)
