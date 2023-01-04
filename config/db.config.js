module.exports = {
    HOST: "db-phone-collect-1.cnfn1z2rth4y.us-east-1.rds.amazonaws.com",
    USER: "ph_admin",
    PASSWORD: "Hefpew-modwi6-safxad",
    DB: "phone_collect",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };