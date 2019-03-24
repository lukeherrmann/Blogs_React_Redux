const blogs = ( state = [], action) => {
    switch(action.type) {
        case 'BLOGS':
            return action.blogs
        case 'ADD_BLOG':
            return [action.blog, ...state]
        case 'DELETE_BLOG':
            return state.filter( blog => {
                if (action.id !== blog.id )
                 return blog
            })
        // case "SHOW_BLOG":
        //     return action.blog
        // case 'UPDATE_BLOG':
        //     return
        default:
            return state
    }
}

export default blogs