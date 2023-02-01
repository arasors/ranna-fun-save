import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import {Button, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {updateSite} from "0.lib/context/actions/siteAction";
import classNames from "classnames";
import Image from "next/image";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);

    return(
        <div className={"items-start w-full"}>

            <div
                className={classNames({
                    "h-[42.25rem] w-full pt-[15.438rem] pl-[6.313rem]": true,
                    "bg-istanbul-mosque bg-cover bg-bottom bg-no-repeat": true
                })}
                 id="slider">
                    <Typography
                        variant={"h1"}
                        color={"white"}
                        className={"md:text-7xl text-2xl font-bold"}
                    >
                        Explore Türkiye
                    </Typography>
                    <Typography
                        variant={"h1"}
                        color={"white"}
                        className={"md:text-5xl text-xl font-bold "}
                    >
                        & Save in best places!
                    </Typography>
            </div>

        </div>
    )
}

export default memo(Home);
