import axios from 'axios';

const instance=axios.create({
    baseURL:'https://my-burger-project-c6b4a.firebaseio.com/'
});
export default instance;