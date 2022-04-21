import React from "react";
import {
  addFirebaseData,
  getFirebaseCollection,
} from "../services/firebase/request";
import { UserProps } from "../services/firebase/types";
import ListUsers from "./ListUsers";

const App = () => {
  const [loading, setLoading] = React.useState<boolean | null>(null);
  const [useData, setUserData] = React.useState<UserProps[]>([]);

  const handleGetUserCollection = async () => {
    try {
      setLoading(true);
      const response = await getFirebaseCollection("users");
      setUserData(response);
      setLoading(false)
      return response;
    } catch (e) {
      return e;
    }
  };

  const handleAddUser = async () => {
    const data = {
      name: "Alysson",
      age: 21,
      description: "Alysson is a developer",
    };

    await addFirebaseData("users", data);
  };

  // retuns

  const LoadingComponent = () => <p>Carregando ...</p>;

  const UserListComponent = () => (
      <>
        {useData.map((item) => (
          <ListUsers
            age={item.age}
            name={item.name}
            description={item.description}
          />
        ))}
      </>
  );

  return (
    <div>
      <h1>React</h1>
      <button onClick={() => handleAddUser()}>Enviar</button>
      <button onClick={() => handleGetUserCollection()}>Atualizar</button>

      <div>
        Listagem de usuários:
        <br />
        {loading ? <LoadingComponent /> : <UserListComponent />}
      </div>
    </div>
  );
};

export default App;
