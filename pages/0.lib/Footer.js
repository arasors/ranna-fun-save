import React, {memo} from "react";
import {updateSite} from "0.lib/context/actions/siteAction";
import {Button, IconButton, Select, Option} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import {footer} from "0.lib/data/footer";
import dayjs from "dayjs";
import {ReactSVG} from "react-svg";

const Footer = () => {

    const site = useSelector(state => state?.site);
    const {t} = useTranslation();

    return(
        <footer className={classNames({
            "border-t border-solid border-gray-300": true,
            "py-4 w-full": true
        })}>
            <div className={classNames({
                "container mx-auto": true
            })}>
                <div className={classNames({
                    "md:flex-row w-full justify-between": true
                })}>
                    <div className={classNames({
                        "flex-1 md:flex-row gap-x-12 gap-y-4": true,
                        "md:px-0 px-4 md:py-0 py-8 w-full": true
                    })}>
                        {footer && footer?.map((item,key) => (
                            <Link href={item?.href} key={key}>
                                {t(item?.title)}
                            </Link>
                        ))}
                    </div>
                    <div className={"items-center md:w-auto w-full md:pt-0 pt-4 md:px-0 px-3"}>
                        <Select
                            label={t("site-language")}
                            value={site?.language}
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 25 },
                            }}
                            onChange={(v) => updateSite({language: v})}
                        >
                            <Option value={"tr-TR"}>Türkçe</Option>
                            <Option value={"en-US"}>English</Option>
                        </Select>
                    </div>
                </div>

                <div className={classNames({
                    "md:flex-row w-full justify-between items-center pt-2": true
                })}>

                    <span>{t("copyright-text")} © {dayjs(new Date()).format("YYYY")}</span>


                    <div className={classNames({
                        "flex-row gap-x-4": true
                    })}>

                        <IconButton color="white" className={"shadow-none p-0 text-primary text-base cursor-pointer"} onClick={() => {}}>
                            <ReactSVG src={"icons/youtube.svg"} />
                        </IconButton>

                        <IconButton color="white" className={"shadow-none p-0 text-primary text-base cursor-pointer"} onClick={() => {}}>
                            <ReactSVG src={"icons/instagram.svg"} />
                        </IconButton>

                        <IconButton color="white" className={"shadow-none p-0 text-primary text-base cursor-pointer"} onClick={() => {}}>
                            <ReactSVG src={"icons/twitter.svg"} />
                        </IconButton>

                        <IconButton color="white" className={"shadow-none p-0 text-primary text-base cursor-pointer"} onClick={() => {}}>
                            <ReactSVG src={"icons/facebook.svg"} />
                        </IconButton>

                    </div>

                </div>


            </div>
        </footer>
    )
};

export default memo(Footer);
