import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://server-dev.ap-northeast-2.elasticbeanstalk.com/"
});

export default axios;
