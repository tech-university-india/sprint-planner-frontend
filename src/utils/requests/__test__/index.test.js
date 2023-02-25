import makeRequest from '..';
import axios from 'axios';

jest.mock('axios');

describe('makeRequest', () => {
  it('should make a get request', async () => {
    axios.mockResolvedValue({ data: 'data' });
    const response = await makeRequest('get', 'url');
    expect(response).toEqual('data');
  });
  it('should make a post request', async () => {
    axios.mockResolvedValue({ data: 'data' });
    const response = await makeRequest('post', 'url');
    expect(response).toEqual('data');
  });
});
