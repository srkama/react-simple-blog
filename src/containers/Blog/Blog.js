import React, { Component } from 'react';
import Aux from '../../components/hoc/aux';
import { Route, NavLink } from 'react-router-dom';
import PostList from '../post-list/PostList';
import CreatePost from '../create-post/CreatePost';

import classes from './blog.css';



class Blog extends Component {

    state = {
        blogs:[],
        selectedPost:null
    }

    render() {
        return(
            <Aux>
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
                            <li><NavLink to={{
                                    pathname:"/new-post",
                                    search:"?hello=true"
                                }} activeClassName={classes.active}>New Post</NavLink></li>
                            {/* <li><a href="/">Home</a></li> */}
                            {/* <li><a href="/new-post">Create Post</a></li> */}
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={PostList} />
                <Route path="/new-post" exact component={CreatePost} />

                {/* <PostList /> */}
                {/* <DetailPost postID={this.state.selectedPost}></DetailPost> */}
                {/* <CreatePost></CreatePost> */}
            </Aux>
        )
    }
}


export default Blog;