import mongoose from 'mongoose';

(async ()=> {
    const db = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/moongallery', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`Database ${db.connection.name} is connected`)
})();

