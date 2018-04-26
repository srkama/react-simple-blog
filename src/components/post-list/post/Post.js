import React from 'react';
import classes from './post.css'

const post = (props) => {
    let classNames = props.selected ? [classes.post, classes.selected].join(' ') : classes.post;    
    return (
        <div className={classNames} onClick={props.postClicked}>
            <div className={classes.title}>{props.post['title']}</div>
            <div className={classes.author}>{props.post['author']}</div>
        </div>
    )
}

export default post;