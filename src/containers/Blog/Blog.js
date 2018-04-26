import React, { Component } from 'react';
import Aux from '../../components/hoc/aux';
import PostList from '../../components/post-list/PostList';
import DetailPost from '../../components/detail-post/DetailPost';
import Axios from 'axios';




class Blog extends Component {

    state = {
        blogs:[],
        selectedPost:null
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const updatedPost = response.data.map((post, key) => {
                return {
                    ...post,
                    author:'new author'
                }
            })
            this.setState({blogs:updatedPost})
        });
    }

    postSelected = (id) => {
        this.setState({selectedPost:id});
    }

    render() {
        return(
            <Aux>
                <PostList postList={this.state.blogs} postClicked={this.postSelected} selectedPost={this.state.selectedPost}></PostList>
                <DetailPost postID={this.state.selectedPost}></DetailPost>
                <div>Create Blog </div>
            </Aux>
        )
    }
}


export default Blog;