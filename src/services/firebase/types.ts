export default interface UserDatabaseProps {
  users: { [user_id: string]: UserProps };
}

export interface UserProps {
  id: number;
  name: string;
  age: number;
  description: string;
}

export type UserPropsWithouId = Omit<UserProps, "id">;
