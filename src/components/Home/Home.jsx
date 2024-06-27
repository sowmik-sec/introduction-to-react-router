import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <h2>This is home component</h2>
      <Outlet />
    </div>
  );
}

export default Home;
