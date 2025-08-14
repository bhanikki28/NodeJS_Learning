import pool from "../config/db.js";

export const createEmployeeTable = async() => {
    const queryText = `CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)`;
    try {
        pool.query(queryText);
        console.log("Employee table created if not exists")
    } catch (error) {
        console.log("Exception in creating employee table")
    }
};
