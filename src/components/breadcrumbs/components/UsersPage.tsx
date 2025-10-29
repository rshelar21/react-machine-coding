import { Link } from "react-router-dom";

export const UsersPage = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
        <Link to={`/users/${item}`}>
          <div key={item}>
            <p>user : {item}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
