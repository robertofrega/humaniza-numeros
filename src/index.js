const escalaCurta = [
  '', //n*10^0*3
  'Mil', //n*10^1*3
  'Milhão', //n*^2*3
  'Bilhão', //...
  'Trilhão',
  'Quadrilhão',
  'Quintilhão'
];

function humanizaNumeros(input, decimals = 0) {
  const indexEscala = Math.ceil(input.toString().length / 3) - 1;
  const divisor = Math.pow(10, 3 * indexEscala);
  const base = input / divisor;
  const escala = base <= 2 ? escalaCurta[indexEscala] : escalaCurta[indexEscala].replace('ão', 'ões');

  return `${base.toFixed(decimals).replace('.', ',')} ${escala}`;
}

export default humanizaNumeros;