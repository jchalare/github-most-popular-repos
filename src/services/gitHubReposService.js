const {httpClientPlugin} = require('../plugins/httpClient.plugin');

const getMostPopularGitHubRepos = async( user ,numberOfRepos ) => {

  if(typeof user !== 'string') throw {'message':`The 'user' parameter must be a string, but received ${typeof user}`};
  if(isNaN(numberOfRepos) || numberOfRepos <= 0 || !Number.isInteger(numberOfRepos)) throw {'message':`The 'numberOfRepos' parameter must be a number`};

  const url =`https://api.github.com/search/repositories?q=user:${user}&sort=stars&per_page=${numberOfRepos}`;

  const repositories = await httpClientPlugin.getData(url);

  return repositories.items;
}


module.exports = {
    getMostPopularGitHubRepos,
}