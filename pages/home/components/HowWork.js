import React, {memo} from "react";
import classNames from "classnames";
import Image from "next/image";
import {useTranslation} from "react-i18next";

const HowWork = () => {

    const {t} = useTranslation();

    return(
        <div className={classNames({
            "w-full py-12": true,
            "bg-pr-pattern2 relative overflow-hidden": true
        })}>
            <div className="container max-w-screen-xl mx-auto py-8 w-full text-white md:flex-row px-4 md:px-0">
                <div className={"flex-1"}>
                    <h3 className={"text-3xl font-bold"}>{t("how-does-it-work-summary-title")}</h3>
                    <p className="py-8">{t("how-does-it-work-summary-text")}</p>
                </div>
                <div className={"flex-1"}>
                    <video>

                    </video>
                </div>

            </div>
        </div>
    )
};

export default memo(HowWork);
