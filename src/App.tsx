// import { FileExplorer } from "./components";
// import { HomePagination } from "./components";
// import { PasswordGenerator, ProgressBar } from "./components";
// import { ProgressBar } from "./components";
// import { GridLight } from "./components";
// import { Home } from "./components";
// import { TicTacToe } from "./components";
// import { MyInput } from "./components";
// import { AccordianPage } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, UsersDetailsPage, UsersPage, RootLayout } from "./components";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/users/:id",
        element: <UsersDetailsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div
      style={{
        margin: "4px",
      }}
    >
      {/* <FileExplorer /> */}
      {/* <HomePagination /> */}
      {/* <PasswordGenerator /> */}
      {/* <ProgressBar /> */}
      {/* <GridLight /> */}
      {/* <Home/> */}
      {/* <TicTacToe /> */}
      {/* <MyInput/> */}
      {/* <AccordianPage /> */}
   
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
