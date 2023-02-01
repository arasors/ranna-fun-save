import React from "react";
import classNames from "classnames";
import {ReactSVG} from "react-svg";
import {FaUserAlt} from "react-icons/all";

export const header = {
    login: [
        {
            title: "register",
            href: "/auth/register",
            auth: false,
            ico: <ReactSVG src={"icons/user-register.svg"} alt={"ico"} className={classNames({"scale-95 cursor-pointer": true})} />
        },
        {
            title: "login",
            href: "/auth/login",
            auth: false,
            ico: <ReactSVG src={"icons/login-key.svg"} alt={"ico"} className={classNames({"scale-95 cursor-pointer": true})} />
        }
    ],
    menu: [
        {
            href: "/",
            auth: false,
            ico: <ReactSVG src={"icons/home.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
        },
        {
            href: "/cards",
            auth: true,
            ico: <ReactSVG src={"icons/credit-card.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
        },
        {
            href: "/favs",
            auth: true,
            ico: <ReactSVG src={"icons/heart.svg"} alt={"ico"} className={classNames({"cursor-pointer": true})} />
        },
        {
            href: "/search",
            auth: true,
            ico: <ReactSVG src={"icons/search.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
        },
        {
            href: "/profile",
            auth: true,
            ico: <FaUserAlt className={classNames({"cursor-pointer": true})} />
        }
    ]
}
