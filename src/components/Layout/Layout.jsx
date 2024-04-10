import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<span>Loading ...</span>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
