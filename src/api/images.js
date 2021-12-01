import axios from "axios";
import fakeData from "./data";
const baseURL = "";

//Since no Api route was given, the function below will simulate an axios call returning the data
const postImage = (image) => {
  // try {
  const config = { headers: { "Content-Type": "multipart/form-data" } };

  //   let formData = new FormData();
  //   if (image) formData.append("image", image);
  //  const { data } = await axios.post(
  //         `${baseURL}/check-image`,
  //        formData,
  //         config
  //       );
  return { ok: true, data: fakeData };
  //     } catch (error) {

  //         if(error.response && error.response.data.message){
  //             return  {ok:false,data:error.response.data.message}
  //         }else{
  //             return {ok:false,data:error.message},
  //         }

  //   }
};

export default {
  postImage,
};
