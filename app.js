const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const multer = require('multer')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.use(cors())

app.post('/image', upload.single('file'), function (req, res) {
  console.log(req.body)
})

const db = require("./models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
    (async () => {
      await db.productTypes.create({
        name: "phone"
      });
      await db.productTypes.create({
        name: "computer"
      });
    })();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(port, () => {
console.log(`listening at http://localhost:${port}`)
})