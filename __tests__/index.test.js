const helloWorld = require('../src/index');

test('debería retornar "Hola, Mundo!"', () => {
  expect(helloWorld()).toBe("Hola, Mundo!");
});