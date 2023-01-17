const express = require('express');
const app = express();

app.get('/calculator', (req, res, next) => {
  const { operation, num1, num2 } = req.query;

  if (!operation || !num1 || !num2) {
    return res.status(400).send({ error: 'Invalid parameters' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return res.status(400).send({ error: 'Invalid operation' });
  }

  res.send({ result });
});

app.listen(8000, () => {
  console.log('Calculator API listening on port 8000');
});
