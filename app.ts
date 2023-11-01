const express = require('express');
const bodyParser = require('body-parser');
const { transpileModule } = require('typescript');

const app = express();

app.use(bodyParser.text({ type: 'text/typescript' }));

app.post('/convert', (req, res) => {
  try {
    if (typeof req.body !== 'string') {
      return res.status(400).send('Invalid input: body must be a string');
    }

    const result = transpileModule(req.body, {
      compilerOptions: { module: 'CommonJS' },
    });

    res.type('text/javascript').send(result.outputText);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
