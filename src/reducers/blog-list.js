const updateBlogList = (state,action) => {
    if (state === undefined) {
        return {
            posts: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case "FETCH_POSTS_REQUESTED":
            return {
                posts: [],
                loading: true,
                error: null,
            };
        case "FETCH_POSTS_SUCCESS":
            return {
                posts: action.payload,
                loading: false,
                error: null,
            }
        case "FETCH_POSTS_ERROR":
            return {
                posts: [],
                loading: true,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default updateBlogList;