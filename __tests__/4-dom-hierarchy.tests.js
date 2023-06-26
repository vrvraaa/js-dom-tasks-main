import fs from 'fs';
import { jest } from '@jest/globals';
import path from 'path';

test('index', async () => {
  const initHtml = fs.readFileSync(path.join('public', '4-index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const spy = jest.spyOn(window.console, 'log');
  await import('../solutions/4-index.js');
  const expected = ['First paragraph', 'Second paragraph', 'Third paragraph'];
  expect(spy).toHaveBeenCalledWith(expected);
});
