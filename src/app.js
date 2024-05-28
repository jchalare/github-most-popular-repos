const express = require('express');

const { mostPopularRepoList } = require("./controllers/gitHubReposController");

const app = express();
const PORT = 3000;


app.get('/', async (req, res) => {

  console.log('***** START *****');

  try {

   const { user = 'google', reposToShow = 10 } = req.query;

   const numberOfRepos = Number(reposToShow);

   const mostPopularRepos = await mostPopularRepoList(user,numberOfRepos);
   console.log(mostPopularRepos);

   res.json(mostPopularRepos);

  } catch (error) {

    res.status(500).send({error});
    console.log({error});

  }

  console.log('***** END *****');
});


app.all('*', (req, res) => {
  res.status(404).send('Url Not Found');
  console.log('Url Not Found');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

