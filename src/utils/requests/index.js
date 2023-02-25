import axios from 'axios';

const makeRequest = async (
  method,
  url,
  data = {},
  headers = {},
  navigate = null,
) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(`Error occurred while making request: ${error.message}`);
    if (navigate) {
      if (error.response) {
        return navigate(`/error/${error.response.status}`);
      }
      return navigate('/error');
    }
    throw error;
  }
};

export default makeRequest;
