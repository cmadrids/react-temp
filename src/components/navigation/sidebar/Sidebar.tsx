import React, { ReactNode } from "react";
import { IRoute } from "../../../shared/models/IRoute.model";
import { getRoute } from "../../../shared/router/routes";
import { Routes } from "../../../shared/enums/routes.enum";
import SidebarOption from "../sidebar-option/SidebarOption";

/**
 * Represents the Sidebar.
 * @returns {ReactNode} - The Sidebar JSX element.
 */
const Sidebar = (): ReactNode => {

    const navOptions: Array<IRoute | undefined> = [
        getRoute(Routes.STUDENT_GRADES)
    ]

    return <ul>
        {navOptions.map((option, index) => {
            return <SidebarOption key={index} option={option}/>
        })}
    </ul>

}

export default Sidebar;