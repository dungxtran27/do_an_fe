import axios from "../utils/axiosUtil";

interface loginProps {
  email: string;
  password: string;
}
export const authApi = {
  login: async (credential: loginProps) => {
    return await axios.post(`api/auth/login`, credential);
  },
};
