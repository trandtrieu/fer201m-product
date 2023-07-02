import { Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="display-1">Page Not Found</h1>
      <Outlet />
    </div>
  );
};

export default NotFound;
