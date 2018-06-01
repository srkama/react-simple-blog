import React, { Component } from 'react';
import Aux from '../../components/hoc/aux';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import PostList from '../post-list/PostList';
// import CreatePost from '../create-post/CreatePost';
import DetailPost from '../detail-post/DetailPost';


import classes from './blog.css';
import asyncComponent from '../../components/hoc/asyncComponent';

const AsyncCreatePost =  asyncComponent(()=>{
    return import('../create-post/CreatePost');
})

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
                <Switch>                  
                    <Route path="/posts" exact component={PostList} />
                    <Redirect from="/" exact to="/posts" />
                    <Route path="/new-post" exact component={AsyncCreatePost} />
                    <Route path="/posts/:id" component={DetailPost} />
                    <Route render={()=><h1>The Required Mage is not found</h1>} />
                </Switch>
                {/* <PostList /> */}
                {/* <DetailPost postID={this.state.selectedPost}></DetailPost> */}
                {/* <CreatePost></CreatePost> */}
            </Aux>
        )
    }
}


export default Blog;