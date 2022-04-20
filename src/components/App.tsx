import React from "react";
import {
  addFirebaseData,
  getFirebaseCollection,
} from "../services/firebase/request";

const App = () => {
  const handleGetUserCollection = async () => {
    const response = await getFirebaseCollection("users");
    console.log(response);
  };

  const handleAddUser = async () => {
    const data = {
      name: "Alysson",
      age: 21,
      description: "Alysson is a developer",
    }

    await addFirebaseData("users", data);
  };

  return (
    <div>
      <h1>React</h1>
      <button onClick={() => handleAddUser()}>Enviar</button>
      <button onClick={() => handleGetUserCollection()}>Atualizar</button>
    </div>
  );
};

export default App;
