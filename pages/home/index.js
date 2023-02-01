import React, {memo, useState, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Button, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import {ReactSVG} from "react-svg";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);
    const [tab, setTab] = useState(0);

    return(
        <div className={"items-start w-full"}>

            <div
                className={classNames({
                    "md:h-[42.25rem] h-48 w-full p-4 relative": true,
                    "bg-istanbul-mosque bg-cover bg-bottom bg-no-repeat": true
                })}
                 id="slider">
                    <div className="flex-1 justify-center container mx-auto">
                        <Typography
                            variant={"h1"}
                            color={"white"}
                            className={"md:text-7xl text-2xl font-bold"}
                        >
                            {t("slider-text-1")}
                        </Typography>
                        <Typography
                            variant={"h1"}
                            color={"white"}
                            className={"md:text-5xl text-xl font-bold "}
                        >
                            {t("slider-text-2")}
                        </Typography>
                    </div>

                <div className={classNames({
                    "flex-row md:gap-x-4 gap-x-1 justify-center container mx-auto": true,
                    "translate-y-1/2": true
                })}>

                    {["silver", "gold", "diamond"].map((item, key) => (
                        <Button
                            className={classNames(({
                                "flex flex-col": true,
                                "md:py-8 py-1 md:px-20 px-4 rounded-xl text-white font-medium": true,
                                "transition-all ease-in-out": true,
                                "scale-90": tab!==key,
                                "scale-105": tab===key,
                                "bg-diamond bg-diamond-gradient": item==="diamond",
                                "bg-gold": item==="gold",
                                "bg-silver": item==="silver"
                            }))} key={key} onClick={() => setTab(key)}>
                            <span className={"text-xl md:text-2xl"}>{item?.toUpperCase()}</span>
                            <span className={"pb-4 normal-case"}>membership</span>
                        </Button>
                    ))}

                </div>


                <div className={classNames({
                    "absolute right-0 top-1/2 -translate-y-1/2": true,
                    "bg-primary py-1 px-3 flex-row gap-x-1 items-center rounded-l text-md text-white cursor-pointer": true
                })}>
                    <ReactSVG src={"icons/shopping-bag-plus.svg"} height={20} width={20} />
                    <span className={"px-3 md:text-base text-sm"}>{t('buynow')}</span>
                </div>
            </div>

        </div>
    )
}

export default memo(Home);
