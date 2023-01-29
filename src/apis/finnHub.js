import axios from 'axios';

const TOKEN = 'cf9joiiad3i2irjr8ts0cf9joiiad3i2irjr8tsg';

export default axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: TOKEN,
  },
});
