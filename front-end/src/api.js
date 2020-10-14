import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:6445/',
    json: true
})

export default {
    async execute(method, resource, data) {
        const req = await client({
            method,
            url: resource,
            data,
        });
        return req.data;
    },

    login(data) {
        return this.execute('post', `/Login`, data)
    },

    getProgramme() {
        return this.execute('get', '/Programme');
    },

    getGroup(data) {
        return this.execute('get', '/Group', data);
    },

    getPosts() {
        return this.execute('get', '/posts')
    },

    getPost(id) {
        return this.execute('get', `/posts/${id}`)
    },

    createPost(data) {
        return this.execute('post', '/posts', data)
    },

    updatePost(id, data) {
        return this.execute('put', `/posts/${id}`, data)
    },

    deletePost(id) {
        return this.execute('delete', `/posts/${id}`)
    }
}