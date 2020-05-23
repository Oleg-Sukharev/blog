import React from 'react';
import classes from './blog-list.module.scss';
import BlogItem from '../blog-item';

const BlogList = ({posts =[]}) => {
    return (
        <div className='container'>
            <div className={classes.blogListWr}>
                <h1>Latest Posts</h1>
                <div className={classes.blogList}>
                    {
                        posts.map((post) => {
                            return (
                                <BlogItem  key={post.id}  {...post}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogList;
