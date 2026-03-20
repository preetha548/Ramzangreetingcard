import { createBrowserRouter } from "react-router";
import { RootLayout } from "./pages/RootLayout";
import { HomePage } from "./pages/HomePage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { DestinationDetailPage } from "./pages/DestinationDetailPage";
import { MyTripsPage } from "./pages/MyTripsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "destinations", Component: DestinationsPage },
      { path: "destinations/:id", Component: DestinationDetailPage },
      { path: "my-trips", Component: MyTripsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
