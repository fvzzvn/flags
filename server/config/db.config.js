module.exports = {
    HOST: "localhost",
    USER: "db_user",
    PASSWORD: "pAssword#43#",
    DB: "test_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };