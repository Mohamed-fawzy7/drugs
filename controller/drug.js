const Drug = require('../models/drug.model');
class DrugsController {
  async addDrug(req, res) {
    try {
      const {
        price,
        type,
        location,
        pharmacy,
        quantity,
        drug_name: name,
      } = req.body;

      const drug = new Drug({
        price,
        name,
        type,
        location,
        pharmacy,
        quantity,
      });

      await drug.save();

      res.json({ message: 'added drug' });
    } catch (error) {
      console.log({ error });
      res.status(400).json({
        message: `can't add drug`,
      });
    }
  }

  async getDrugsByName(name) {
    try {
      const drugs = await Drug.find({ name }).populate({ path: 'pharmacy' });

      return drugs;
    } catch (err) {
      console.log(err);
      //return an error page using the template enjene...
      // return res.render("pages/error", {message: err.message, title: "error page"});
      res.status(400).json({ message: err.message, title: 'error page' });
    }
  }

  async getAllDrugsNames(req, res) {
    try {
      const drugs = await Drug.distinct('name');

      return drugs;
    } catch (err) {
      console.log(err);
      //return an error page using the template enjene...
      // return res.render("pages/error", {message: err.message, title: "error page"});
      res.status(400).json({ message: err.message, title: 'error page' });
    }
  }
}
process.on('unhandledRejection', (reason, promise) => {
  console.log(reason);
});
module.exports = new DrugsController();
