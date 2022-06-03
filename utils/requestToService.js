var axios = require('axios');
var url = require('../config/config').serv_url;
var logger = require('../utils/logger').writeLog;


async function do_request(data, route) {
    
	logger('Данные в MPAY: ' + data.body);
    var header = {
        headers: {
          Authorization: 'Bearer ' + url.token
        }
    }

    var result = axios.post(`${url.url}${route}`, data, header)
  
    .then(function (response) {
      return response.data;
  })
  
    .catch(function (error) {
      return error;
    });

    return result;
  };


module.exports.do_request = do_request;
