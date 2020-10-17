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

    searchLlbStudents(data) {
        if (data.PrgId <= 3) {
            data.GrpId = 0;
        }
        return this.execute('GET', `/LLBStudent/Search?prgid=${data.PrgId}&grpid=${data.GrpId}`);
    },

    searchLlmStudents(data) {
        return this.execute('GET', `/LLMStudent/Search?prgid=${data.PrgId}&grpid=${data.GrpId}`);
    },

    postLlbStudentMarks(data) {
        if (data.program === '1') {
            return this.execute('POST', '/Firstyear', data);
        }

        if (data.program === '2') {
            return this.execute('POST', '/Secondyear', data);
        }

        if (data.program === '3') {
            return this.execute('POST', '/Thirdyear', data);
        }

        if (data.program === '4') {
            if (data.group === '1') {
                return this.execute('POST', '/Fourthyear/Criminal', data);
            }
            if (data.group === '2') {
                return this.execute('POST', '/Fourthyear/Business', data);
            }
            if (data.group === '3') {
                return this.execute('POST', '/Fourthyear/Constitutional', data);
            }
            return this.execute('POST', '/Fourthyear/Environment', data);
        }

        if (data.program === '5') {
            if (data.group === '1') {
                return this.execute('POST', '/Fifthyear/Criminal', data);
            }
            if (data.group === '2') {
                return this.execute('POST', '/Fifthyear/Business', data);
            }
            if (data.group === '3') {
                return this.execute('POST', '/Fifthyear/Constitutional', data);
            }
            return this.execute('POST', '/Fifthyear/Environment', data);
        }
    },

    postLlmStudentMarks(data) {
        if (data.program === '6') {
            if (data.group === '1') {
                return this.execute('POST', '/Firstyear/HumanRights', data);
            }
            if (data.group === '2') {
                return this.execute('POST', '/Firstyear/Business', data);
            }
            return this.execute('POST', '/Firstyear/Criminal', data);
        }
        if (data.program === '7') {
            if (data.group === '1') {
                return this.execute('POST', '/Secondyear/HumanRights', data);
            }
            if (data.group === '2') {
                return this.execute('POST', '/Secondyear/Business', data);
            }
            return this.execute('POST', '/Secondyear/Criminal', data);
        }
    },

    deleteLlbStudent(id) {
        return this.execute('DELETE', `/LLBStudent/${id}`);
    },

    deleteLlmStudent(id) {
        return this.execute('DELETE', `/LLMStudent/${id}`);
    },

    // getPosts() {
    //     return this.execute('get', '/posts')
    // },

    // getPost(id) {
    //     return this.execute('get', `/posts/${id}`)
    // },

    // createPost(data) {
    //     return this.execute('post', '/posts', data)
    // },

    // updatePost(id, data) {
    //     return this.execute('put', `/posts/${id}`, data)
    // },

    // deletePost(id) {
    //     return this.execute('delete', `/posts/${id}`)
    // }
}
