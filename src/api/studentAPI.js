import axios from 'axios';

// const API_BASE = '/api/student';
const BASE_URL = import.meta.env.VITE_API_URL || 'https://class-project-rbe0.onrender.com';
const API_BASE = `${BASE_URL}/api/student`;

export const studentAPI = {
  getDashboard: async () => {
    return axios.get(`${API_BASE}/dashboard`);
  },

  getEnrolledClasses: async () => {
    return axios.get(`${API_BASE}/classes`);
  },

  getAllAssignments: async () => {
    return axios.get(`${API_BASE}/assignments`);
  },

  joinClass: async (classCode) => {
    return axios.post(`${API_BASE}/join`, { classCode });
  },

  getMaterials: async (classId) => {
    return axios.get(`${BASE_URL}/api/materials/${classId}`);
  },

  getAssignments: async (classId) => {
    return axios.get(`${BASE_URL}/api/assignments/class/${classId}`);  
  },

  submitAssignment: async (assignmentId, file) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${BASE_URL}/api/assignments/${assignmentId}/submit`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getAttendance: async () => {
    // return axios.get('/api/attendance/student');
    return axios.get(`${BASE_URL}/api/attendance/student`);
    
  },

  joinLiveClass: async (classId) => {
    // Placeholder
    return { data: { success: true, roomId: `room-${classId}` } };
  },

  raiseHand: async (classId) => {
    // Placeholder
    return { data: { success: true } };
  },
};
