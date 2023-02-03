import React,{memo, useState} from "react";
import classNames from "classnames";
import {useTranslation} from "react-i18next";
import Image from "next/image";
import {Button, Typography} from "@material-tailwind/react";

const AppPreview = () => {

    const {t} = useTranslation();

    return(
        <div
            id="app-preview"
            className={classNames({
                "w-full justify-center py-12": true
            })}
        >
            <div className={classNames({
                "container mx-auto md:px-0 px-4": true,
                "md:flex-row items-center": true

            })}>
                <div className={classNames({
                    "flex-1 py-12": true
                })}>
                    <Image src={require("/public/images/home/app-preview.png")} alt={t("title")} className={"object-contain w-full select-none pointer-events-none h-96"} />
                </div>

                <div className={classNames({
                    "py-4 flex-1 gap-y-12 md:px-1 px-4": true
                })}>
                    <span className={"text-xl"}>{t("app-promotion-text")}</span>


                    <div className="flex-row gap-x-12">
                        <Button color={"white"} onClick={() => {}} className={"shadow-none p-0"}>
                            <Image src={require("/public/google-play.png")} alt={"Download on Google Play"} className={"md:w-48 pointer-events-none select-none object-contain"} />
                        </Button>

                        <Button color={"white"} onClick={() => {}} className={"shadow-none p-0"}>
                            <Image src={require("/public/app-store.png")} alt={"Download on App Store"} className={"md:w-48 pointer-events-none select-none object-contain"} />
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
};


export default memo(AppPreview);
