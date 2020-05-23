import updateBlogList from './blog-list'
import updateBlog from './blog-item'
const reducer = (state, action) =>{
    return {
        postList: updateBlogList(state,action),
        postItem: updateBlog(state,action)
    }
}

export default reducer;