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
                    className={"md:text-[4.75rem] md:leading-[4.75rem] text-2xl font-bold"}
                >
                    {t("slider-text-1")}
                </Typography>
                <Typography
                    variant={"h1"}
                    color={"white"}
                    className={"md:text-[2.95rem] md:leading-[4rem] text-xl font-bold leading-auto"}
                >
                    {t("slider-text-2")}
                </Typography>
            </div>



            <div className={classNames({
                "absolute right-0 top-1/2 -translate-y-1/2": true,
                "bg-primary py-0.5 md:py-1.5 md:px-5 px-2 md:w-48 flex-row gap-x-1 items-center rounded-l text-md text-white cursor-pointer hover:opacity-90": true
            })}>
                <ReactSVG src={"icons/shopping-bag-plus.svg"} height={15} width={15} className={"pointer-events-none scale-[0.8]"} />
                <span className={"px-3 md:text-base font-bold text-sm cursor-pointer -translate-x-2"}>{t('buynow')}</span>
            </div>
        </div>
    )
};

export default memo(Slider);
