import React,{Component} from 'react';
import classes from './blog-page.module.scss';
import Button from '../UI/button';
import {Link} from 'react-router-dom';
import BlogComments from '../blog-comments';
import BlogForm from '../blog-form';

export default class BlogPage extends Component  {
    render(){
        const { author,title,comments } = this.props.post;

        const commentsLayout = comments ? <BlogComments comments={comments} /> : null;
        return (
            <div className={classes.blogPage}>
                <div className='container'>
                    <Link to='/'>
                        <Button type="success">Latest Posts</Button>
                    </Link>
                    <h1>Post page</h1>
                    <div>
                        <div>{title}</div>
                        <div>{author}</div>
                    </div>
                    {}
                    <BlogForm itemId={this.props.itemId}/>
                    {commentsLayout}
                </div>
            </div>
        )
    }
}