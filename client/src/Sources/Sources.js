import axios from "axios";

const API_URL = "http://localhost:1371";

export default {
  getPlatformList() {
    return axios.get(`${API_URL}/api/platform/all`);
  },
  addPlatform(name) {
    return axios.post(`${API_URL}/api/platform/create`, { name });
  },
  deletePlatform(id) {
    return axios.get(`${API_URL}/api/platform/remove/${id}`);
  },
  editPlatform(id, name) {
    return axios.post(`${API_URL}/api/platform/rename/`, { id, name });
  }
};