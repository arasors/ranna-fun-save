import React, {memo} from "react";
import Image from "next/image";
import classNames from "classnames";

const Header = () => {

    return(
        <nav id="header" className={classNames({
            "py-2 h-20 px-[6.313rem] w-full relative": true,
            "flex-row flex sticky top-0 bg-white": true
        })}>
            <div id="logo">
                <Image src={require("/public/logo.svg")?.default} alt={"Logo"} />
            </div>

            <div
                id="bg-circ"
                className={classNames({
                    "absolute right-4 top-full -translate-y-12  box-border w-1/2 h-20": true,
                    "rounded-[50%] bg-white pointer-events-none select-none": true,
                })}
            />
        </nav>
    )
}

export default memo(Header);
