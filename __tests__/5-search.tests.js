import fs from 'fs';
import { jest } from '@jest/globals';
import path from 'path';

test('index', async () => {
  const initHtml = fs.readFileSync(path.join('public', '5-index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const spy = jest.spyOn(window.console, 'log');
  await import('../solutions/5-index.js');
  const expected = {
    description: 'Category Description',
    title: 'Category Name',
    items: [
      { description: 'Article Description 1', title: 'Article Name 1' },
      { description: 'Article Description 2', title: 'Article Name 2' },
    ],
  };
  expect(spy).toHaveBeenCalledWith(expected);
});
