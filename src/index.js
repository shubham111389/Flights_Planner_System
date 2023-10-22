const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

const { City, Airplane, Airport } = require('./models');

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  try {
    const city = await Airport.create({ name: 'ram', code: 'blr',cityId:1,address:'ramnagar' });
    console.log(city);
  } catch (error) {
    console.error('Error creating city:', error);
  }
});
