import {
  createRoutesFromElements,
  createHashRouter,
 
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/* <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms-conditions" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/:service" element={<Service />} />
      <Route path="/:category/:service" element={<MenuService />} /> */}
    </Route>
  )
);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
// ]);
