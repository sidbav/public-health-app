import React from "react";
import { NavLink } from "react-router-dom";
import routes from '../routes.js'

export const NavLinks = () => {
    return (
            routes.map((route) => {
                const {path, id, icon , name} = route;
                return (
                    <li>
                    <NavLink
                        to = {path}
                        className="nav-link"
                        activeClassName="active"
                    >
                    <i className={icon} />
                    <p>{name}</p>
                    </NavLink>
                    </li>
                )
            })
    )
}
