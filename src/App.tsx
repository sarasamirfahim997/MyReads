import Root from "./layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Auth from "./pages/Auth";
import BookDetail from "./pages/BookDetail";
import Error from "./pages/Error";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      { path: "/search", element: <Search /> },
      { path: "/login", element: <Auth /> },
      { path: "/books/:bookId/details", element: <BookDetail /> },
    ],
    errorElement: <Root outlet={<Error />} />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
