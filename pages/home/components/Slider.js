import React, {memo} from "react";
import classNames from "classnames";
import {Button, Typography} from "@material-tailwind/react";
import {ReactSVG} from "react-svg";
import {useTranslation} from "react-i18next";

const Slider = () => {

    const {t} = useTranslation();

    return(
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
                "absolute right-0 top-1/2 -translate-y-1/2": true,
                "bg-primary py-1 px-3 flex-row gap-x-1 items-center rounded-l text-md text-white cursor-pointer": true
            })}>
                <ReactSVG src={"icons/shopping-bag-plus.svg"} height={20} width={20} />
                <span className={"px-3 md:text-base text-sm"}>{t('buynow')}</span>
            </div>
        </div>
    )
};

export default memo(Slider);
