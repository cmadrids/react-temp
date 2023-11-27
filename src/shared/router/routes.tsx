import { Login, Register, StudentGrades } from "../../pages";
import { Routes } from "../enums/Routes.enum";
import { IRoute } from "../models/IRoute.model";

const ROUTES: Array<IRoute> = [{
    name: Routes.STUDENT_GRADES,
    path: '/',
    requiresAuth: true,
    component: <StudentGrades />
},
{
    name: Routes.LOGIN,
    path: '/login',
    requiresAuth: false,
    component: <Login />
},
{
    name: Routes.REGISTER,
    path: '/register',
    requiresAuth: false,
    component: <Register />
}];

const getRoute = (routeToFind: string): IRoute | undefined => {
    return ROUTES.find(route => route.name === routeToFind);
}

export { ROUTES, getRoute };