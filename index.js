//Basic operations
function calculation() {
  var firstValue = parseInt(prompt('Digite o primeiro valor: '));
  var secondValue = parseInt(prompt('Digite o segundo valor: '));
  var operator = prompt('Digite / para divisão, x para multiplicação, + para adição ou - para subtração.');

  switch(operator) {
    case '/':
      document.write('<h2>'+ firstValue/secondValue +'</h2>');
      break;
    case 'x':
      document.write('<h2>'+ firstValue*secondValue +'</h2>');
      break;
    case '+':
      document.write('<h2>'+ firstValue + secondValue +'</h2>');
      break;
    case '-':
      document.write('<h2>'+ firstValue-secondValue +'</h2>');
      break;
    default:
      document.write('Opção inválida');
  }
}

