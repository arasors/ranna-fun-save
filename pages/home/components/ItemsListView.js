import React, {memo} from "react";
import classNames from "classnames";
import {IconButton} from "@material-tailwind/react";
import {ReactSVG} from "react-svg";
import Image from "next/image";
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {categoriesData} from "0.lib/data/categories";

const ItemsListView = ({category = {pageTitle: "", type: ""}}) => {

    const {t} = useTranslation();

    return(
        <div className={classNames({
            "mt-8 container mx-auto w-full max-w-screen-lg px-4": true
        })}>
            <div className="flex-row justify-between items-center w-full">
                <h3 className={classNames({
                    "py-3 text-3xl capitalize": true
                })}>{category?.pageTitle}</h3>
                <IconButton variant={"gradient"} color={"white"} className={"rounded-full text-sm p-1 shadow-none"}>
                    <ReactSVG src={"icons/settings.svg"} alt={"ico"} className={"text-primary scale-90"} />
                </IconButton>
            </div>


            <div className="flex-row flex-wrap w-full gap-y-4">
                {categoriesData && categoriesData?.filter(i => i?.type===category?.type)?.map((item,key) => (
                    <div className={"md:basis-1/2 items-center"} key={key}>
                        <div className={classNames({
                            "w-full": true,
                            "md:pr-8": key%2===0,
                            "md:pl-8": key%2!==0
                        })}>
                            <div className={classNames({
                                "flex-1 my-2 rounded-xl h-44 overflow-hidden": true,
                                "w-full": true
                            })}>
                                <Image src={item?.image} alt={item?.title} className={"h-full w-full object-cover"} />
                            </div>
                            <span className={"pb-3 text-lg font-medium text-center w-full"}>{item?.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex-row justify-end items-end w-full">
                <Link href={"/"} className={classNames({
                    "text-slate-900 text-lg py-4 font-bold flex flex-row justify-between items-center gap-x-0 hover:gap-x-5 group": true,
                    "transition-all ease-in-out hover:opacity-90": true
                })}>
                    {t("see-all")}

                    <FaAngleRight className={classNames({
                        "group-hover:opacity-100 opacity-0": true,
                        "transition-all ease-in-out hover:opacity-90": true
                    })} />
                </Link>
            </div>



        </div>
    )
};

export default memo(ItemsListView);
