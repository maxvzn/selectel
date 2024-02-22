import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="about">Home</Link>
          </li>
          <li>
            <Link to="user">Get All User</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Layout;
