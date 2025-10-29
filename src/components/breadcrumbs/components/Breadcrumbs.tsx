import "../style.css";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="breadcrumbs">
      {!!paths.length && <Link to="/">Home</Link>}
      {paths.map((item, index) => {
        const isLast = index === paths.length - 1;

        return (
          <>
            {isLast ? (
              <span key={item}>/ {item}</span>
            ) : (
              <span>
                {" "}
                / <Link to={`/`}>{item}</Link>
              </span>
            )}
          </>
        );
      })}
    </div>
  );
};
