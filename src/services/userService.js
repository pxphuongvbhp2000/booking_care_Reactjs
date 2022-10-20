import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const handleGetAllUsersApi = (inputId) => {
    // return axios.get(`/api/get-all-users?id=${inputId}`);
    return axios.get(`/api/get-all-users`, { params: { id: inputId } });
}

const handleCreateNewUserApi = (data) => {
    return axios.post(`/api/create-new-user`, data);
}

const handleEditUserApi = (data) => {
    return axios.put(`/api/edit-user`, data);
}

const handleDeleteUserApi = (userId) => {
    return axios.delete(`/api/delete-user`, { data: { id: userId } });
}

const handleGetAllCodeApi = (type) => {
    return axios.get(`/api/get-all-codes`, { params: { type: type } });
}

const getTopDoctorsHomePageApi = (limit) => {
    return axios.get(`/api/top-doctor-home`, { params: { limit: limit } });
}

const getAllDoctorsApi = () => {
    return axios.get(`/api/get-all-doctors`);
}

const saveDetailInforDoctorApi = (data) => {
    return axios.post('/api/save-detail-infor-doctor', data);
}

const getDetailInforDoctorApi = (id) => {
    return axios.get('/api/get-detail-doctor-by-id', { params: { id: id } });
}

const saveBulkScheduleDoctorApi = (data) => {
    return axios.post('/api/bulk-create-schedule', data);
}

const getScheduleDoctorByDateAPi = (doctorId, date) => {
    return axios.get('/api/get-schedule-doctor-by-date', { params: { doctorId: doctorId, date: date } });
}



export {
    handleLoginApi,
    handleGetAllUsersApi,
    handleCreateNewUserApi,
    handleEditUserApi,
    handleDeleteUserApi,
    handleGetAllCodeApi,
    getTopDoctorsHomePageApi,
    getAllDoctorsApi,
    saveDetailInforDoctorApi,
    getDetailInforDoctorApi,
    saveBulkScheduleDoctorApi,
    getScheduleDoctorByDateAPi,
}

