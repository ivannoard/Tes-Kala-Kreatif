import { useQuery } from "react-query";

const useFetch = (requestServiceAPI, requestEndpoint, requestId) => {
  const requestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getData = async (serviceAPI, endpoint, config, id = "") => {
    const response = await serviceAPI.get(`/${endpoint}/${id}`, config);
    return response;
  };

  const { isLoading, error, data } = useQuery("getData", () =>
    getData(requestServiceAPI, requestEndpoint, requestConfig, requestId)
  );
  return { isLoading, error, data };
};
export default useFetch;
