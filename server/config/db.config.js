module.exports = {
    HOST: "localhost",
    USER: "flags",
    PASSWORD: "flags",
    DB: "flags_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };