import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'abc123!!',
  database: 'proj_proposal'
}).promise();


export async function getCity(name) {
  const [rows] = await pool.query(`
  SELECT *
  FROM cities
  WHERE city_name = ?
  `, [name])
  return rows[0]
}


const cities = await getCity('Philadelphia')
console.log(cities)