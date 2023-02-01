import React, {memo} from "react";
import Image from "next/image";

const Header = () => {

    return(
        <nav id="header">
            <div id="logo">
                <Image src={require("/public/logo.svg")?.default} alt={"Logo"} />
            </div>
        </nav>
    )
}

export default memo(Header);
