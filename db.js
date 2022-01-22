import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
// require("dotenv").config()

export const connect = () => {
    mongoose.connect(
        "mongodb+srv://testdatabase:test1234@cluster0.oel4a.mongodb.net/test",
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    ).then(() => { console.log("db connected") })
        .catch((err) => { console.log(err) }
        )
};