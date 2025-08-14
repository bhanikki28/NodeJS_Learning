// standardized response function

import { createEmployeeService, deleteEmployeeByIdService, getAllEmployeesService, getEmployeeByIdService, updateEmployeeByIdService } from "../models/employeeModel.js";


const handleResponse = (res,status, msg, data =null)=> {
    res.status(status).json({
        status,
        msg,
        data,
    });
};

export const createEmployee = async(req,res, next) => {
    const { name, email} = req.body;
    try {
        const newEmployee = await createEmployeeService(name, email);
        handleResponse(res, 201, "Employee Created Successfully", newEmployee)
    } catch (error) {
        next(error);
    }
};

export const getAllEmployees = async(req,res, next) => {
    try {
        const employees = await getAllEmployeesService();
        handleResponse(res, 200, "Employees Retrieved Successfully", employees)
    } catch (error) {
        next(error);
    }
};

export const getEmployeeById = async(req,res, next) => {
    try {
        const id = req.params.id;
        const employee = await getEmployeeByIdService(id);
        if(!employee) return handleResponse(res,404, "Employee not found")
        handleResponse(res, 200, "Employee Retrieved Successfully", employee)
    } catch (error) {
        next(error);
    }
};

export const deleteEmployeeById = async(req,res, next) => {
    try {
        const id = req.params.id;
        const deletedEmployee = await deleteEmployeeByIdService(id);
        if(!deleteEmployee) return handleResponse(res, 404, "Employee not found")
        handleResponse(res, 200, "Employee deleted Successfully", deletedEmployee)
    } catch (error) {
        next(error);
    }
};

export const updateEmployee = async(req,res, next) => {
    try {
        const id = req.params.id;
        const { name, email} = req.body
        const updatedEmployee = await updateEmployeeByIdService(id,name, email);
        if(!employee) return handleResponse(res,404, "Employee not found")
        handleResponse(res, 200, "Employee updated Successfully", updatedEmployee)
    } catch (error) {
        next(error);
    }
};