import '@testing-library/jest-dom';
//import jest from 'jest-mock';
import {jest} from '@jest/globals';
import solution from '../solutions/2-bom.js';

const assignMock = jest.fn();

delete window.location;
window.location = { assign: assignMock };

afterEach(() => {
  assignMock.mockClear();
});

test('application', () => {
  expect(solution('https://yandex.ru')).toMatch(/Mozilla\/\d\.\d https:\/\/yandex\.ru/);
});

