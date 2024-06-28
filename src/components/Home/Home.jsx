import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      <h2>This is home component</h2>
      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      <Footer />
    </div>
  );
}

export default Home;
