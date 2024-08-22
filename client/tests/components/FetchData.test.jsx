import { FetchData } from '../../src/components/FetchData.jsx';

const mockImplementation = () => Promise.resolve({
  json () {
    return { data: 'mocked data' };
  }
});

describe('FetchData', () => {
  let fetchSpy;

  beforeAll(() => {
    fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(mockImplementation);
  });

  it('should return mocked data', async () => {
    const data = await FetchData();
    expect(data).toEqual({ data: 'mocked data' });
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });
})