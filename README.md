# humaniza-numeros

[![Build Status](https://travis-ci.org/robertofrega/humaniza-numeros.svg?branch=master)](https://travis-ci.org/robertofrega/humaniza-numeros)
[![Known Vulnerabilities](https://snyk.io/test/github/robertofrega/humaniza-numeros/badge.svg)](https://snyk.io/test/github/robertofrega/humaniza-numeros)

> Transforma números muito grandes em versões mais legíveis por humanos, de acordo com a escala utilizada no Brasil: `1234567` → `1,2 Milhão`

## Instalação
```sh
$ npm i humaniza-numeros
```

## Utilização

```javascript
import humanizaNumeros from 'humaniza-numeros';

humanizaNumeros(1560, 1);
// => '1,6 Mil'

humanizaNumeros(2111111111111, 3);
// => '2,111 Trilhões'
```

## API

### humanizaNumeros(input, decimais = 0)
Arredonda o valor `input` com base no [`Math.round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round), utilizando o número de casas `decimais` fornecido e anexando o valor de escala apropriado (Milhão, Bilhão, etc.)

#### input

Tipo: `number`

Número a ser humanizado

#### decimals

Tipo: `number`

Número de casas decimais


## Licença

MIT © [Roberto Frega](https://github.com/robertofrega)
