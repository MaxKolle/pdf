import axios from 'axios';

const homeRequest = () => {
 debugger;

  axios.get(`http://10.0.0.6:3000/kame-tcha/api/v1/home/`)
      .then(res => {
        const response = res.data;

        return response;
      })
      .catch(error => {
        return error;
      });
}

export { homeRequest }


/*
axios.post('/formulas/create', {
	name: "",
	parts: ""
})
.then(response => {
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});
*/
