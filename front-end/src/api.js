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

    getLlbGroup() {
        return this.execute('get', '/LLBGroup');
    },

    getLlmGroup() {
        return this.execute('get', '/LLMGroup');
    },

    createLlbStudent(data) {
        return this.execute('POST', '/LLBStudent', data);
    },

    createLlmStudent(data) {
        return this.execute('POST', '/LLMStudent', data);
    },

    getLlmStudents() {
        return this.execute('GET', '/LLMStudent');
    },

    getAllStudents() {
        return this.execute('GET', '/Student');
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