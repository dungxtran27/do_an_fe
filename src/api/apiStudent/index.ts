import axios from "../../utils/axiosUtil";

export const studentApi = {

    getStudentsInSameGroup: async () => {
        return await axios.get(`api/student/viewStudentByGroup`);
      },
};
