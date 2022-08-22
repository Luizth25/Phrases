import { Navigate, Route, Routes as RoutesRRD } from "react-router-dom";

import Advices from "pages/Advices";
import Home from "pages/Home";
import Jokes from "pages/Jokes";
import Philosophy from "pages/Philosophy";

const Routes = (): JSX.Element => (
  <RoutesRRD>
    <Route index element={<Home />} />
    <Route path="/advices" element={<Advices />} />
    <Route path="/jokes" element={<Jokes />} />
    <Route path="/philosophy" element={<Philosophy />} />
    <Route path="*" element={<Navigate to="/" />} />
  </RoutesRRD>
);

export default Routes;
