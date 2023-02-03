import {ReactSVG} from "react-svg";
import classNames from "classnames";
import React from "react";

export const footer = [
    {
        title: "about-us",
        href: "/about-us",
        auth: false,
        ico: <ReactSVG src={"icons/question.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
    },
    {
        title: "terms-of-use",
        href: "/terms-of-use",
        auth: false,
        ico: <ReactSVG src={"icons/question.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
    },
    {
        title: "privacy-policy",
        href: "/privacy-policy",
        auth: false,
        ico: <ReactSVG src={"icons/key-hole.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
    },
    {
        title: "contact",
        href: "/contact",
        auth: false,
        ico: <ReactSVG src={"icons/key-hole.svg"} alt={"ico"} className={classNames({" cursor-pointer": true})} />
    }
]
