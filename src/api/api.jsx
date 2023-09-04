import axiosInstance from "./axios";

const url = "http://drivequote-dev.webmyneproduct.com/api";
const jwtToken = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${jwtToken}`,
};

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
    throw new Error(error.message);
  }
};

const getEmployeeList = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterEmployee/getalls`, {
      headers,
    });

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getRegion = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterRegion/getalls`, {
      headers,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
// http://drivequote-dev.webmyneproduct.com/api/MasterBranch/getalls
const getBranch = async () => {
  try {
    const response = await axiosInstance.get(`${url}/MasterBranch/getalls`, {
      headers,
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// http://drivequote-dev.webmyneproduct.com/api/MasterSalesOffice/getalls
const getMasterSalesOffice = async () => {
  try {
    const response = await axiosInstance.get(
      `${url}/MasterSalesOffice/getalls`,
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDepartment = async () => {
  try {
    const response = await axiosInstance.get(
      `${url}/MasterDepartment/getalls`,
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getDesignation = async () => {
  try {
    const response = await axiosInstance.get(
      `${url}/MasterDesignation/getalls`,
      {
        headers,
      }
    );
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
// post(apiUrl, postData, { headers })
const createEmployee = async (data) => {
  try {
    const response = await axiosInstance.post(`${url}/MasterEmployee`, {data}, {
      headers,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
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
