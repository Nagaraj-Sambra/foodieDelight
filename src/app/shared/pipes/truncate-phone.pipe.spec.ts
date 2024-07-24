import { TruncatePhonePipe } from './truncate-phone.pipe';

describe('TruncatePhonePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePhonePipe();
    expect(pipe).toBeTruthy();
  });
});
