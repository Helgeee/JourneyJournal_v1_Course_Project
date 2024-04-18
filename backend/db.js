const Pool = requir('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '21',
    host: "localhost",
    port: 5452,
    database: "db_jornay_jornal"

})

module.exports = pool