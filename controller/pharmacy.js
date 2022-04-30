const Pharmacy = require('../models/pharmacy.model');
class PharmacyController {
  static async addPharmacy(req, res) {
    try {
      const pharmacy = new Pharmacy(req.body);

      await pharmacy.save();

      res.json({ message: 'added pharmacy' });
    } catch (error) {}
  }

  static async getPharmacies() {
    const pharmacies = await Pharmacy.find();

    return pharmacies;
  }
}

module.exports = PharmacyController;
