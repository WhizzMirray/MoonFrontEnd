import Homepage from "../pages/Homepage.jsx";
import MediaPage from "../pages/MediaPage.jsx";
import EditMediaPage from "../pages/EditMediaPage.jsx";

let indexRoutes = [
    { path : "/editmedia", name : "Edit media page", component : EditMediaPage},
    { path : "/media", name : "Media page", component : MediaPage},
    { path : "/", name : "Homepage", component : Homepage},
];

export default indexRoutes;