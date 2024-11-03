// services/tabService.js
import axiosInstance from './axiosInstance';

export const getTabs = async () => {
  const response = await axiosInstance.get('/tabs');
  return response.data;
};

export const getTab = async (id) => {
  const response = await axiosInstance.get(`/tabs/${id}`);
  return response.data;
};

export const addTab = async (tab) => {
  const response = await axiosInstance.post('/tabs', tab);
  return response.data;
};

export const updateTab = async (id, updatedTab) => {
  const response = await axiosInstance.patch(`/tabs/${id}`, updatedTab);
  return response.data;
};

export const deleteTab = async (id) => {
  const response = await axiosInstance.delete(`/tabs/${id}`);
  return response.status === 204;
};
