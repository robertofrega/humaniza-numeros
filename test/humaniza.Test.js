import { describe, it } from 'mocha';
import { expect } from 'chai';
import humanizaNumeros from '../dist/index.js';

describe('humanizaNumeros', function () {
  it('deve arredondar corretamente para cima', function () {
    expect(humanizaNumeros(1560, 1)).to.equal('1,6 Mil');
    expect(humanizaNumeros(1451, 1)).to.equal('1,5 Mil');
  });
  it('deve arredondar corretamente para baixo', function () {
    expect(humanizaNumeros(1449, 1)).to.equal('1,4 Mil');
  });
  it('deve arredondar corretamente em quantidade de dígitos decimais', function () {
    expect(humanizaNumeros(1449, 1)).to.equal('1,4 Mil');
    expect(humanizaNumeros(1449, 2)).to.equal('1,45 Mil');
    expect(humanizaNumeros(1449, 3)).to.equal('1,449 Mil');
    expect(humanizaNumeros(1449, 4)).to.equal('1,4490 Mil');
    expect(humanizaNumeros(1449, 5)).to.equal('1,44900 Mil');
  });
  it('deve apresentar corretamente no singular', function () {
    expect(humanizaNumeros(1111111, 1)).to.equal('1,1 Milhão');
    expect(humanizaNumeros(1111111111, 1)).to.equal('1,1 Bilhão');
    expect(humanizaNumeros(1111111111111, 1)).to.equal('1,1 Trilhão');
  });
  it('deve apresentar corretamente no plural', function () {
    expect(humanizaNumeros(2111111, 1)).to.equal('2,1 Milhões');
    expect(humanizaNumeros(2111111111, 1)).to.equal('2,1 Bilhões');
    expect(humanizaNumeros(2111111111111, 1)).to.equal('2,1 Trilhões');
  });
  it('deve apresentar corretamente os milhares', function () {
    expect(humanizaNumeros(1234, 1)).to.equal('1,2 Mil');
  });
  it('deve apresentar corretamente os milhões', function () {
    expect(humanizaNumeros(1234567, 1)).to.equal('1,2 Milhão');
  });
  it('deve apresentar corretamente os bilhões', function () {
    expect(humanizaNumeros(1234567890, 1)).to.equal('1,2 Bilhão');
  });
  it('deve apresentar corretamente os trilhões', function () {
    expect(humanizaNumeros(1234567890000, 1)).to.equal('1,2 Trilhão');
  });
  it('deve apresentar quatrilhões como milhares de trilhões', function () {
    expect(humanizaNumeros(1234567890000000, 1)).to.equal('1.234 Trilhões');
  });
  it('deve apresentar números muito grandes como notação científica', function () {
    expect(humanizaNumeros(1234567890000000000, 1)).to.equal('1.2x10^18');
  });
});