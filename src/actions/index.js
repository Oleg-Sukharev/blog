const postsRequested = () => {
    return {
        type: "FETCH_POSTS_REQUESTED",
    }
}

const postsLoaded = (newposts) => {
    return {
        type: "FETCH_POSTS_SUCCESS",
        payload: newposts
    }
}

const postsError = (error) => {
    return {
        type: "FETCH_POSTS_ERROR",
        payload: error
    }
}

const postRequested = () => {
    return {
        type: "FETCH_POST_REQUESTED",
    }
}

const postLoaded = (newposts) => {
    return {
        type: "FETCH_POST_SUCCESS",
        payload: newposts
    }
}

const postError = (error) => {
    return {
        type: "FETCH_POST_ERROR",
        payload: error
    }
}

const fetchPosts = (blogService,dispatch) => () => {
    dispatch(postsRequested());
    blogService.getPosts()
        .then(response => response.text())
        .then(data => {
            dispatch(postsLoaded(JSON.parse(data)))
        })
        .catch((err)  => dispatch(postsError(err)))
}

const fetchPost = (blogService,dispatch,id) => () => {
    dispatch(postRequested());
    blogService.getPost(id)
        .then(response => response.text())
        .then(data => {
            dispatch(postLoaded(JSON.parse(data)))
        })
        .catch((err)  => dispatch(postError(err)))
}

const fetchPostCommit = (blogService,dispatch,id,data) => () => {
    blogService.postCommit(id,data)
        .then(response => response.text())
        .then(fetchPost(blogService,dispatch,id))
        .catch(error => console.log('error', error));
}


export {
    fetchPosts,
    fetchPost,
    fetchPostCommit
}