const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://ClientLoginMineFlare:dbuJng8AYC4umslI@mc-auth.pyddo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}