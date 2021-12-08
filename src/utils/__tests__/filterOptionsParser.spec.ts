import {removeDuplicates} from '../filterOptionsParser';

describe('utils/filterOptionsParser', () => {
  it('should remove duplicated values', () => {
    const options = removeDuplicates(['1', '2', '1', '2', '3']);
    expect(options).toHaveLength(3);
    expect(options[0]).toBe('1');
    expect(options[1]).toBe('2');
    expect(options[2]).toBe('3');
  });
});
