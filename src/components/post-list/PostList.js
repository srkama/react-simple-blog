import React from 'react';
import Post from './post/Post';
import classes from './postlist.css';
import { ENETUNREACH } from 'constants';

const postList = (props) => {
    return (
        <div className={classes.postList}>
           {props.postList.map((item, key)=>{
                return <Post 
                        key={key} 
                        post={item} 
                        postClicked={()=>props.postClicked(item.id)} 
                        selected={item.id===props.selectedPost ? ENETUNREACH : false}/>
            })}
        </div>
    )
}


export default postList;