import axios from "axios";

const instance = axios.create({
    baseURL: "https://test-project-masoud-default-rtdb.firebaseio.com/"
}
)

export default instance

