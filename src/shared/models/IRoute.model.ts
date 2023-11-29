import { ReactNode } from "react";

// export interface IRoute {
//   name: string; // opciones en pantalla
//   path: string; // este es obligatorio (liga)
//   component: ReactNode; // este es obligatorio (element)
//   requiresAuth: boolean; // para el guardia
// }

export interface IRoute {
  name: string;
  path: string;
  component: ReactNode;
  requiresAuth: boolean;
}
