import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

test('scripts count', async () => {
  const initHtml = fs.readFileSync(path.join('public', '3-index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  await import('../solutions/3-dom.js');
  const body = prettier.format(document.body.innerHTML, options);
  expect(body).toMatchSnapshot();
});