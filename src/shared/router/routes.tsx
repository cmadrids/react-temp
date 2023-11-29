import Login from "../../pages/login/Login";
import StudentGrades from "../../pages/student-grades/StudentGrades";
import { Routes } from "../enums/Routes.enum";
import { IRoute } from "../models/IRoute.model";

const ROUTES: Array<IRoute> = [
  {
    name: Routes.STUDENT_GRADES,
    path: "/",
    component: <StudentGrades />,
    requiresAuth: true,
  },
  {
    name: Routes.LOGIN,
    path: "/login",
    component: <Login />,
    requiresAuth: false,
  },
];

/**
 * Obtiene una ruta del catalago.
 * @param {string} routeToFind -ruta a buscar.
 * @returns {IRoute | undefined} - la ruta encontrada
 * o indefinido si no existe.
 */

const getRoute = (routeToFind: string): IRoute | undefined => {
  return ROUTES.find((route) => route.name === routeToFind);
};

export { ROUTES, getRoute };
