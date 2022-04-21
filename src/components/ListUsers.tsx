import React from "react";

interface ListUserProps {
  name: string;
  age: number;
  description: string;
}

const ListUsers = ({
  name,
  age,
  description
}: ListUserProps) => {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Idade: {age}</h2>
      <h3>Descrição: {description}</h3>
    </div>
  );
};

export default ListUsers;
