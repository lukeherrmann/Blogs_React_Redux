import React from 'react';
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import Blog from './Blog'
import {Route, } from "react-router-dom"
 
const App = () => (
  <div className="App">
    <BlogForm />
    <BlogList />
    <Route exact path="/" component={BlogList} />
    <Route path="/blogs/:id" component={Blog}/>
  </div>
)


export default App;
