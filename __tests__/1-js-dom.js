import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import { query } from '@github/query-selector';

test('application', () => {
  const initHtml = fs.readFileSync(path.join('public', '1-index.html')).toString();
  document.documentElement.innerHTML = initHtml;
  const element = query(document, 'script');
  expect(element.src).toMatch(/{*|\.\.}solutions\/1-index\.js/);
  expect(element).toBeInTheDocument();
});
