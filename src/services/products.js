// import axios from 'axios';

const endpoint = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

export const getProducts = () => {
  return fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .catch((errors) => {
      console.log(errors);
    });
};

// export const getProducts = async () => {
//   try {
//     const response = await axios.get(endpoint);
//     return response.json();
//   } catch (errors) {
//     return console.log(errors);
//   }
// };
