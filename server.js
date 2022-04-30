const express = require('express');
const session = require('express-session');
const DrugRouter = require('./routes/drugs');
const DragController = require('./controller/drug');
const PharmacyController = require('./controller/pharmacy');

require('./DB');

const path = require('path');
//creat express app using this constant vairable
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', DrugRouter);

//initalize enjine befor using it
app.set('view engine', 'ejs');

//load asset--static path
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get('/', async (req, res) => {
  //render html  page

  const pharmacies = await PharmacyController.getPharmacies();

  const drugsNames = await DragController.getAllDrugsNames();

  res.render('pages/drugs2', { pharmacies, drugs: drugsNames });
});

app.get('/drugs/:drug_name', async (req, res) => {
  //render html  page

  const drugName = req.params.drug_name;

  const drugs = await DragController.getDrugsByName(drugName);

  res.render('pages/drug', { drugs });
});

app.listen(port, () => {
  console.log('listen to sever at port http://localhost:3000');
});
