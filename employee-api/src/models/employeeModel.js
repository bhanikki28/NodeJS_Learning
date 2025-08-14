import pool from "../config/db.js";
export const getAllEmployeesService = async() => {
    const result = await pool.query("SELECT * from employees")
    return result.rows;

};

export const getEmployeeByIdService = async(id) => {
    console.log("Getting employee by id",id)
    const result = await pool.query("SELECT * from employees where id=$1")
    return result.rows[0];
};

export const updateEmployeeByIdService = async(id,name, email) => {
    const result = await pool.query(
        "UPDATE employees set name=$1, email=$2 where id=$3) RETURNING *", [name,email,id]
    );
    return result.rows[0]
};

export const deleteEmployeeByIdService = async(id) => {
    const result = await pool.query(
        "DELETE FROM employees where id=$1 RETURNING *", [id]
    );
    return result.rows[0]
};

export const createEmployeeService = async(name, email) => {
    const result = await pool.query(
        "INSERT INTO employees(name,email) VALUES($1, $2) RETURNING *", [name,email]
    );
    return result.rows[0]
};

