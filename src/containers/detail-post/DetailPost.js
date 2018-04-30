import React, { Component } from 'react';
import classes from './detail-post.css';
import Axios from 'axios';

class DetailPost extends Component {

    state = {
        currentPost: null
    }

    componentDidUpdate() {
        if(this.props.postID) {
            if ((this.props.postID && !this.state.currentPost) || (this.state.currentPost && this.state.currentPost.id !== this.props.postID)) {
                Axios.get('/posts/' + this.props.postID)
                .then(response => {
                    this.setState({currentPost:response.data});
                })
            }
        }
    }

    render() {
        let posts = <p>select a post to view</p>;

        if(this.props.postID) {
            posts = <p>Loading!..</p>
        }

        if(this.state.currentPost) {
            posts = 
                    <div className={classes.postDetail}>
                        <div className={classes.head}>
                            <span className={classes.title}>
                            {this.state.currentPost.title}
                            </span>
                            {/* <span> by </span> 
                            <span className={classes.author}>
                            {this.state.currentPost.author}
                            </span> */}
                        </div>
                        <div className={classes.content}>
                            {this.state.currentPost.body}
                        </div>
                    </div>
        }
        return posts
    }
}


export default DetailPost;