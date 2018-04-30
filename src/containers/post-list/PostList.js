import React, { Component } from 'react';
import Post from '../../components/post/Post';
import classes from './postlist.css';
import Axios from 'axios';

class PostList extends Component {

    state = {
        postList:[],
        selectedPost:null
    }

    componentDidMount() {
        Axios.get('/posts').then(response => {
            const updatedPost = response.data.map((post, key) => {
                return {
                    ...post,
                    author:'new author'
                }
            })
            this.setState({postList:updatedPost})
        });
    }

    postSelected = (id) => {
        this.setState({selectedPost:id});
    }

    render() {
        return(
            <div className={classes.postList}>
            {this.state.postList.map((item, key)=>{
                    return <Post 
                            key={key} 
                            post={item} 
                            postClicked={()=>this.postSelected(item.id)} 
                            selected={item.id===this.state.selectedPost ? true : false}/>
            })}
            </div>
        )
    }
}


export default PostList;