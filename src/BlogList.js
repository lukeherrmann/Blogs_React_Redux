import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from "react-router-dom"
import { Card, Button, } from "semantic-ui-react"

const BlogList = ({ blogs, dispatch }) => (
   blogs.map(b => {
      return (
        <Card.Group key={b.id}>
          <Card >
            <Card.Content>
              <Card.Header>{b.name}</Card.Header>
              <Card.Content>{b.body}</Card.Content>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons">
                <Button onClick={ () => dispatch({ type: 'DELETE_BLOG', id: b.id })} color="red">
                  Delete
            </Button>
              <Button onClick={ () => dispatch({ type: 'UPDATE_BLOG', blog: b})}>
                  Update
            </Button>
              <Button as="Link" >
                  Show Blog
            </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      )
    })
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, }
}
export default connect(mapStateToProps)(BlogList);


// onClick={ () => this.deleteBlog(b.id)}