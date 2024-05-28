const { getMostPopularGitHubRepos } = require("../services/gitHubReposService");

const mostPopularRepoList = async ( user, numberOfRepos  ) => {

  try {
    const repositories = await getMostPopularGitHubRepos(user, numberOfRepos);
    const mostPopularRepoList = [];

    for (const [index, repository] of repositories.entries()) {
          mostPopularRepoList.push({
            ranking: index+1,
            stars: repository.stargazers_count,
            name: repository.name,
            description: repository.description,
            url: repository.html_url                  
        });
      }

    return mostPopularRepoList;
    
  } catch (error) {
    
    throw error.message;
  } 
  
}

module.exports = {
    mostPopularRepoList
};
  