import axios, { AxiosInstance } from "axios";
const baseURL = {
  apiDashboard: import.meta.env.VITE_PUBLIC_API_DASHBOARD,
};

export const getApi = (env: keyof typeof baseURL): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL[env],
  });

  return api;
};
