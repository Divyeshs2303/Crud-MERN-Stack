import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./componentes/getUser/User";
import Add from "./componentes/addUser/Add";
import Edit from "./componentes/updateUser/Edit";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
