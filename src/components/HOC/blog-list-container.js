import React, { Component } from 'react';
import BlogList from '../blog-list';
import Spinner from '../UI/spinner';
import  ErrorIndicator  from "../UI/error-indicator";
import WithBlogService  from './with-blog-service';
import { connect } from 'react-redux';
import {  compose } from "../../utils";
import { fetchPosts} from "../../actions";

class BlogListContainer extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }
    render() {
        const { posts, loading, error} = this.props;
        if (loading)  return  <Spinner/>
        if(error) return  <ErrorIndicator/>
        return <BlogList posts={posts}/>
    }
}
const mapStateToProps = ( { postList: { posts,loading, error} }) => {
    return{ posts, loading, error }
}

const mapDispatchToProps = (dispatch,{blogService}) =>  {
    return {
        fetchPosts: fetchPosts(blogService,dispatch)
    }
}

export default compose (
    WithBlogService(),
    connect(mapStateToProps,mapDispatchToProps)
)(BlogListContainer)
