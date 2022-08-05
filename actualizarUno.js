var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "Fakestore",
    "dataSource": "Cluster0",

    "filter": {"title": "cantuflas"  },
      "update": {
          "$set": {
              "title": "pantuflas",
              
          }
      } 
        }

    );
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nlsxt/endpoint/data/v1/action/updateOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '5NlSGhWYy5YybVUDEZbolQAKxKbFW5lHRT5vxmd2YnDisAI9NepjhfUcmhsC2d2P', // contraseña de la API del servidor de mongodb
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
