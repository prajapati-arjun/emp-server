
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const Connection = async (username, password) => {
    const URL = `mongodb://user:codewitharjun@ac-gkmwrph-shard-00-00.13i0nyj.mongodb.net:27017,ac-gkmwrph-shard-00-01.13i0nyj.mongodb.net:27017,ac-gkmwrph-shard-00-02.13i0nyj.mongodb.net:27017/?ssl=true&replicaSet=atlas-zb5mem-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;