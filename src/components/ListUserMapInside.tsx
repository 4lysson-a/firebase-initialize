import React from 'react';
import { UserProps } from '../services/firebase/types';
import ListUsers from './ListUsers';

interface ListUserMapInsideProps {
  useData: UserProps[];
}

const ListUserMapInside = ({useData}: ListUserMapInsideProps) => {
  return (
    <div>
      {useData.map((item) => (
        <ListUsers
          key={item.id}
          age={item.age}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ListUserMapInside;
