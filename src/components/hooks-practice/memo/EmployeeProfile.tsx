import { memo } from "react";

interface Props {
  name: string;
  email: string;
}

const EmployeeProfile = ({ name, email }: Props) => {
  console.log("yes");
  return (
    <>
      <p>Name:{name}</p>
      <p>Email: {email}</p>
    </>
  );
};

export const MemoEmployeeProfile = memo(EmployeeProfile)