import React from 'react';
import classes from './blog-item.module.scss';
import { NavLink } from 'react-router-dom';

const BlogItem = (props) => {
    const { title, body,id} = props;
    return (
        <div className={classes.itemWr}>
            <NavLink to={'/posts/' + id}>
                <h2> {title}</h2>
                <div>{body}</div>
            </NavLink>
        </div>
    );
}

export default BlogItem;