


const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/weather";
const client = new MongoClient(url);

async function ActiveUsers(Username, Password) {
    try {
        await client.connect();

        const db = client.db('WeatherSenseDB');
        const col1 = db.collection('LoginAuthentication');
        const col2 = db.collection('ActiveUsers');

        const query = { 'Username': Username, 'Password': Password };
        const result = await col1.findOne(query);

        if (result) {
            delete result._id; // Safe to delete now
            await col2.insertOne(result);
            return 1;
        } else {
            return 0;
        }
    } catch (err) {
        console.error("Error in ActiveUsers:", err);
        return -1;
    } finally {
        await client.close();
    }
}

// Example call with test credentials
(async () => {
    const a = await ActiveUsers("testUser", "testPass"); // Replace with real test data
    console.log(a); // 1 = success, 0 = invalid login, -1 = error
})();

module.exports = { ActiveUsers };

