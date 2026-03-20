import { createBrowserRouter } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";
import { BikesPage } from "./pages/BikesPage";
import { BikeDetailPage } from "./pages/BikeDetailPage";
import { RoutesPage } from "./pages/RoutesPage";
import { MyRidesPage } from "./pages/MyRidesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "bikes", Component: BikesPage },
      { path: "bikes/:id", Component: BikeDetailPage },
      { path: "routes", Component: RoutesPage },
      { path: "my-rides", Component: MyRidesPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);