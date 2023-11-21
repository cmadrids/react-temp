import React, { ReactNode } from "react";
import { IRoute } from "../../../shared/models/IRoute.model";
import { Link } from "react-router-dom";

type SidebarOptionProps = {
    option: IRoute | undefined;
}

/**
 * Represents a sidebar option.
 * @returns {ReactNode} - The Sidebar Option JSX element.
 */
const SidebarOption = ({ option }: SidebarOptionProps): ReactNode => {

    if(option) {
        console.log(option);
        return <li>
            <Link to={option.path}>
                {option.name}
            </Link>
        </li>
    }
    return null;
}

export default SidebarOption;