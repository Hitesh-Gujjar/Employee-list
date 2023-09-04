import axios from "axios";
const jwtToken = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "http://drivequote-dev.webmyneproduct.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // Replace with your authorization token
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
