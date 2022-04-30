const express = require('express');
const DrugController = require('../controller/drug');
const PharmacyController = require('../controller/pharmacy');
const DrugRouter = express.Router();

DrugRouter.post('/addpharmacy', PharmacyController.addPharmacy);
DrugRouter.post('/adddrug', DrugController.addDrug);

module.exports = DrugRouter;
