import React, { useContext } from "react";
import { postData } from "../../utils/httpRequest";
import { serviceHookbin, servicePokemon } from "../../services";
import { AuthContext } from "../../context/authContext";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const credentials = {
    name: "ivan2",
  };
  const handleSubmit = async () => {
    await postData(serviceHookbin, "postData", credentials);
  };
  const fetchPokemon = useFetch(servicePokemon, "pokemon");
  console.log(fetchPokemon);
  return (
    <div className="App">
      <button onClick={handleSubmit}>Kirim MockAPI</button>
    </div>
  );
};

export default Home;
