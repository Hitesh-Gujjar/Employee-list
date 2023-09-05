import axiosInstance from "./axios";
const url = "http://drivequote-dev.webmyneproduct.com/api";

const getLoginUser = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${url}/Users/authenticate`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response;
  } catch (error) {
     return error
  }
};

const getEmployeeList = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterEmployee/getalls`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getRegion = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterRegion/getalls`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
// http://drivequote-dev.webmyneproduct.com/api/MasterBranch/getalls
const getBranch = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterBranch/getalls`);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// http://drivequote-dev.webmyneproduct.com/api/MasterSalesOffice/getalls
const getMasterSalesOffice = async () => {
  try {
    const response = await axiosInstance.get(
      `${url}/MasterSalesOffice/getalls`
    );
    return response;
  } catch (error) {
     return error
  }
};

const getDepartment = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterDepartment/getalls`);
    return response;
  } catch (error) {
     return error
  }
};

const getDesignation = async () => {
  try {
    const response = await axiosInstance.get(
      `${url}/MasterDesignation/getalls`
    );
    return response;
  } catch (error) {
    return error
  }
};

const createEmployee = async (data) => {
  try {
    const response = await axiosInstance.post(`${url}/MasterEmployee`, data);
    return response;
  } catch (error) {
    return error
  }
};

export {
  getLoginUser,
  getEmployeeList,
  getRegion,
  getBranch,
  getDepartment,
  getMasterSalesOffice,
  getDesignation,
  createEmployee,
};
