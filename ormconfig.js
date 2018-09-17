module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "postgres",
   "password": "postgres",
   "database": "attestation",
   "logging": false,
   "entities": [
      "./src/dal/entities/**/*.ts"
   ],
   "migrations": [
      "src/migrations/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "./src/dal/entities",
      "migrationsDir": "src/migrations",
      "subscribersDir": "src/subscriber"
   }
};