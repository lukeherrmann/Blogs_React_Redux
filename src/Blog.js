import React from "react"
import { connect, } from 'react-redux'
import { Segment, Header } from "semantic-ui-react"

const Blog = ({blog}) => (
    <div>
        <Segment>
            <Header></Header>
            <p></p>
        </Segment>
    </div>
)

const mapStateToProps = (state) => {
    return { blogs: state.blogs, }
  }

export default connect(mapStateToProps)(Blog)