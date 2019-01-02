import React, { Component } from 'react';
//import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent (() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {

	state = {
		auth: true
	}

	render () {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							{/* <li><NavLink 
								to='/' 
								exact
								activeClassName="my-active"
								activeStyle={{
									color: '#fa923f',
									textDecoration: 'underline'
								}}>Home</NavLink></li> */}
							<li><NavLink to='/posts/' exact>Posts</NavLink></li>	
							<li><NavLink to={{
								pathname: '/new-post'				// an absolute path
								// pathname: this.props.match.url + '/new-post'   <--- relative path
								// hash: '#submit', search: '?quick-submit=true'
							}}>New Post</NavLink></li>
						</ul>
					</nav>
				</header>
				<Switch>
					{this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
					<Route path='/posts' component={Posts} />

					{/* <Redirect from='/' to='/posts' /> */}

					{/* Catch any route that are not handled  */}
					<Route render={() => <h1>404 Not Found!</h1>} />	
				</Switch>
				
			</div>
		);
	}
}

export default Blog;