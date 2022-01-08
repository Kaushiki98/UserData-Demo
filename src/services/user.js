import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  createUser
};

async function createUser(requestdata) {
  let url = "http://localhost:3000/send-data"
  console.log(requestdata);
  return httpService(
    'POST',
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();

      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
  }