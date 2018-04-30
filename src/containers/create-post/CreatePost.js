import React, { Component } from 'react';
import classes from './createpost.css';
import Axios from 'axios';



class CreatePost extends Component {

    state = {
        title: '',
        body: '',
        author:''
    }

    submitHandler = () => {
        const payLoad = {
            ...this.state
        }
        Axios.post("/posts", payLoad)
            .then(response=>{
                if(response['status']===201) {
                    this.setState({title:'',body:'',author:''});
                }
            });
    }

    render() {
        return(
            <div className={classes.createPost}>
                <h2>Create Post:</h2>
                <h5>Title</h5>
                <input type='text' value={this.state.title}  onChange={(event)=>this.setState({title:event.target.value})}/>
                <h5>Content</h5>
                <textarea value={this.state.body} onChange={(event)=>this.setState({body:event.target.value})}/>
                <h5>Author</h5>
                <input type='text' value={this.state.author} onChange={(event)=>this.setState({author:event.target.value})}/>
                <button type='button' onClick={this.submitHandler}>Submit</button>
            </div>
        )
    }
}


export default CreatePost;