const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.nj7s8.mongodb.net/projectone",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    .then(() => console.log('connected'))
    .catch((err) => console.log('failed', err));