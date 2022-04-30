const mongoose = require('mongoose');

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
};
const mongoConnectionString =
  'mongodb+srv://user:66dUErwQXmFkZp3w@devcamper-main-cluster.oty2o.mongodb.net/drugs?retryWrites=true&w=majority';
mongoose.connect(mongoConnectionString, mongoConfig);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});
db.once('open', () => {
  console.log('connected to db successfully');
});
