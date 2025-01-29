let arr = [];


function processCommand(command) {
  const [action, value] = command.split(',').map(item => item.trim()); 

  if (action === 'add' && value) {
    arr.push(value); 
    console.log(`Добавлен элемент: ${value}`);
  } else if (action === 'del' && value) {
    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1); 
      console.log(`Удален элемент: ${value}`);
    } else {
      console.log(`Элемент "${value}" не найден в массиве.`);
    }
  } else {
    console.log('Неверная команда.');
  }
}


let command;
while (true) {
  command = prompt('Введите команду (например, add, Иван или del, Иван):');

 
  if (command.toLowerCase() === 'stop') {
    console.log('Команды завершены. Финальный результат:', arr);
    break; 
  }


  processCommand(command);
}
