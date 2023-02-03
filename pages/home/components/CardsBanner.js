import React, {memo} from "react";
import classNames from "classnames";
import Image from "next/image";
import {useTranslation} from "react-i18next";
import CreditCard from "home/components/CreditCard";

const CardsBanner = () => {

    const {t} = useTranslation();

    return(
        <div className={classNames({
            "w-full py-8": true,
            "bg-pr-pattern relative overflow-hidden": true
        })}>
            <div className={classNames({
                "absolute top-12 left-1/2 h-full w-[48%]": true,
                "bg-enthusiastic-joyful bg-right bg-contain bg-no-repeat": true
            })}></div>
            <div className="container mx-auto py-8 w-full text-white flex-row">
                <div className={"flex-1"}>
                    <h3 className={"text-3xl font-bold mt-14 pt-14"}>{t("credit-card-banner-title")}</h3>
                    <p className="py-8">{t("credit-card-banner-text")}</p>




                    <div className={"flex-row gap-x-2"}>

                        {[
                            {
                                title: "diamond-member",
                                type: "diamond"
                            },
                            {
                                title: "gold-member",
                                type: "gold"
                            },
                            {
                                title: "silver-member",
                                type: "silver"
                            },
                        ].map((item,key) => (
                            <CreditCard item={item} key={key} />
                        ))}

                    </div>



                </div>
                <div className={"flex-1"} />

            </div>
        </div>
    )
};

export default memo(CardsBanner);
