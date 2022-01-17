import { Countries } from '../index';
import jsonData = require('../countries.json');
test('Countries Test', () => {
  Countries(jsonData).forEach((country:object) => {
        expect(country).toMatchSnapshot({
          name: expect.any(String),
          code: expect.any(String)
        });
      });
});