import axios from "axios";
import { baseurl } from "./Variable1";

const Axios=axios.create({baseURL:baseurl});
export default Axios;