const axios = require('axios');

const httpClientPlugin = {
  getData: async( url ) => {
    const { data } = await axios.get( url );
    return data;
  },
};


module.exports = {
  httpClientPlugin,
};