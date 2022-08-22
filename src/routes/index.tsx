import { Route, Routes as RoutesRRD } from "react-router-dom";
import Advices from "../pages/Advices";
import Home from "../pages/Home";
import Jokes from "../pages/Jokes";
import Philosophy from "../pages/Philosophy";

const Routes = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Home />} />
      <Route path="/advices" element={<Advices />} />
      <Route path="/jokes" element={<Jokes />} />
      <Route path="/philosophy" element={<Philosophy />} />
    </RoutesRRD>
  );
};
export default Routes;
