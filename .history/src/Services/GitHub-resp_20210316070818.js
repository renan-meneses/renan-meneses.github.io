var axios = require('axios');
class GitHubUserService {

    usernameGit(username) {
        return axios.get('https://api.github.com/users/' + username);
    }



    respositores(username) {
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
}

export default new GitHubUserService();
