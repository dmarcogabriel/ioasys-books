import {getData, removeData, storeData} from '../storage';

const mockstoreKey = '@test';

describe('utils/storage', () => {
  it('should pass on storeData and getData', async () => {
    await storeData<string>(mockstoreKey, 'Testing');
    expect(await getData(mockstoreKey)).toBe('Testing');
  });

  it('should pass on remove data', async () => {
    await removeData(mockstoreKey);
    expect(await getData<string>(mockstoreKey)).toBe(null);
  });
});
