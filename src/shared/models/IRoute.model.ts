import { ReactNode } from "react";

export interface IRoute {
    name: string;
    path: string;
    requiresAuth: boolean;
    component: ReactNode;
}