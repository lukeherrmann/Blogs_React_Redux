import React from 'react';
import { connect, } from 'react-redux'
import {Form, Header, } from "semantic-ui-react"

class BlogForm extends React.Component {
    state = {name: '', body: '', }
  

    handleSubmit = (e) => {
        e.preventDefault()
        const {dispatch, id } = this.props
        const {name, body } = this.state
        const blog = {name, body, id}
        dispatch({ type: 'ADD_BLOG', blog })
        dispatch({ type: "INC_ID", })
        this.setState({ name: '', body: '' })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, })
    }
    
    render() {
        const { name, body } = this.state

        return (
            <div>
                <Header as="h2">Add A Blog Post</Header>
                <Form onSubmit={this.handleSubmit}>
                   <Form.Group widths="equal">
                        <Form.Input 
                            label="Title"
                            name="name"
                            placeholder="Title"
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input 
                            label="Body"
                            name="body"
                            placeholder="Body"
                            value={body}
                            onChange={this.handleChange}
                            required
                        />
                    <Form.Button color="green">Submit</Form.Button>
                   </Form.Group>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { id: state.nextId, }
}
export default connect(mapStateToProps)(BlogForm)