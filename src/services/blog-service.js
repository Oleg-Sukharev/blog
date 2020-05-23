export default class BlogService {
    _apiBase = 'https://simpleblogapi.herokuapp.com';

    async getResource(url, Options) {
        const res = await fetch(`${this._apiBase}${url}`, Options);

        if (!res.ok) {
            throw new Error(`Could not fetch  ${url}` + `, received ${res.status}`)
        }
        return res;
    }

    getPosts = () => {
        const requestOptions = {
            method: 'GET',
            body: undefined,
            redirect: 'follow'
        };
        return this.getResource(`/posts/`, requestOptions)
    }

    getPost(id) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          body: undefined,
          redirect: 'follow'
        };
        return this.getResource(`/posts/${id}?_embed=comments`, requestOptions)
    }
    postCommit(id,data){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"postId":id,"body":data});
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow' 
        };
        return this.getResource(`/comments`, requestOptions)
    }
}



