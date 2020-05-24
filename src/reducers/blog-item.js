const updateBlog = (state, action) => {
    if (state === undefined) {
        return {
            post: {},
            loading: true,
            error: null,
        }
    }
    switch (action.type) {
        case "FETCH_POST_REQUESTED":
            return {
                post: {},
                loading: true,
                error: null,
            };
        case "FETCH_POST_SUCCESS":
            return {
                post: action.payload,
                loading: false,
                error: null,
            }
        case "FETCH_POST_ERROR":
            return {
                post: {},
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default updateBlog;