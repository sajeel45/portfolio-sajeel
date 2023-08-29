
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import HomePage from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
