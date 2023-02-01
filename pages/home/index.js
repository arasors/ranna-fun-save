import React, {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Button, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {updateSite} from "0.lib/context/actions/siteAction";
import classNames from "classnames";
import Image from "next/image";
import {ReactSVG} from "react-svg";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);

    return(
        <div className={"items-start w-full"}>

            <div
                className={classNames({
                    "h-[42.25rem] w-full p-4": true,
                    "bg-istanbul-mosque bg-cover bg-bottom bg-no-repeat": true
                })}
                 id="slider">
                    <div className="flex-1 justify-center container mx-auto">
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

                <div className={classNames({
                    "flex-row gap-x-4 justify-center container mx-auto": true,
                    "translate-y-1/2": true
                })}>

                    {["silver", "gold", "diamond"].map((item, key) => (
                        <div
                            className={classNames(({
                                "p-4 px-16 rounded-xl text-white font-medium": true,
                                [`bg-${item==="diamond" ? item+" bg-diamond-gradient " : item}`]: true,

                            }))} key={key}>
                            <span className={"text-2xl"}>{item?.toUpperCase()}</span>
                            <span className={"pb-4"}>membership</span>
                        </div>
                    ))}

                </div>


                <div className={classNames({
                    "absolute right-0 top-1/2 -translate-y-1/2": true,
                    "bg-primary py-2 px-3 flex-row gap-x-1 items-center rounded-l text-md text-white cursor-pointer": true
                })}>
                    <ReactSVG src={"icons/shopping-bag-plus.svg"} height={20} width={20} />
                    <span className={"px-3"}>{t('buynow')}</span>
                </div>
            </div>

        </div>
    )
}

export default memo(Home);
