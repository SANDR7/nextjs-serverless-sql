import axios from "axios";

const api_endpoint = "http://localhost:3000/api";

/************************************************************
 *
 * API READ
 *
 *************************************************************/
const Read = async (route) => {
  let result = null;
  try {
    await axios
      .get(`${api_endpoint}${route}`)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        console.log("%c Axios error", "color: yellow; font-weight: bold");
        console.error(err);
      });
  } catch (error) {
    throw Error(() => {
      console.log("%c TryCatch error", "color: blue; font-weight: bold");
      console.error(error.message);
    });
  }

  return result;
};

/************************************************************
 *
 * API CREATE
 *
 *************************************************************/
const Create = async (route, data) => {
  let result = null;
  try {
    await axios
      .post(`${api_endpoint}${route}`, data)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        console.log("%c Axios error", "color: yellow; font-weight: bold");
        console.error(err);
      });
  } catch (error) {
    throw Error(() => {
      console.log("%c TryCatch error", "color: blue; font-weight: bold");
      console.error(error.message);
    });
  }

  return result;
};

/************************************************************
 *
 * API DELETE
 *
 *************************************************************/
const Destroy = async (route, options = {}) => {
  let result = null;
  try {
    await axios
      .delete(`${api_endpoint}${route}`, options)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        console.log("%c Axios error", "color: yellow; font-weight: bold");
        console.error(err);
      });
  } catch (error) {
    throw Error(() => {
      console.log("%c TryCatch error", "color: blue; font-weight: bold");
      console.error(error.message);
    });
  }

  return result;
};

const mysqlData = {
  // example: {
  //     read: Read('/endpoint'),
  //     create: (data) => Create('/endpoint', data),
  //     delete: (options) =>  Destroy('/endpoint', options),
  // },
  countries: {
    all: Read("/countries"),
    single: (name) => Read(`/country/${name}`),
  },
};

export default mysqlData;
