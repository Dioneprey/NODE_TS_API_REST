export default {
    port: 3000,
    dbUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d7g7key.mongodb.net/?retryWrites=true&w=majority`,
    env: "development"
}