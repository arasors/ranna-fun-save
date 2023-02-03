import React, {memo, useCallback} from "react";
import classNames from "classnames";
import {Button} from "@material-tailwind/react";
import {useTranslation} from "react-i18next";
import {categories} from "0.lib/data/categories";
import {ReactSVG} from "react-svg";

const CategoriesTab = ({category, tab, tabOnChange = () => {}, categoryOnChange = () => {}}) => {

    const {t} = useTranslation();

    const icon = useCallback((type, ico) => {

        switch (type){
            case "dining":
                return (
                    <ReactSVG src={ico} alt={"ico"} className={classNames({
                        "cursor-pointer scale-95": true,
                        "text-silver": tab===0 && category?.type!==type,
                        "text-gold": tab===1 && category?.type!==type,
                        "text-indigo-500": tab===2 && category?.type!==type,
                        "text-white": category?.type===type
                    })} width={"10"} height={"10"} />
                );
            case "attractions":
                return (
                    <ReactSVG src={ico} alt={"ico"} className={classNames({
                        "cursor-pointer scale-95": true,
                        "text-silver": tab===0 && category?.type!==type,
                        "text-gold": tab===1 && category?.type!==type,
                        "text-indigo-500": tab===2 && category?.type!==type,
                        "text-white": category?.type===type
                    })} width={"10"} height={"10"} />
                );
            case "shopping":
                return (
                    <ReactSVG src={ico} alt={"ico"} className={classNames({
                        "cursor-pointer scale-95": true,
                        "text-gray-400": tab===0 && category?.type!==type,
                        "text-gold": tab===1 && category?.type!==type,
                        "text-indigo-500": tab===2 && category?.type!==type,
                        "text-white": category?.type===type
                    })} width={"10"} height={"10"} />
                );
            case "health":
                return (
                    <ReactSVG src={ico} alt={"ico"} className={classNames({
                        "cursor-pointer scale-95": true,
                        "text-gray-400": tab===0 || tab===1 && category?.type!==type,
                        "text-indigo-500": tab===2 && category?.type!==type,
                        "text-white": category?.type===type
                    })} width={"10"} height={"10"} />
                )
        }

    }, [category, tab]);

    return(
        <React.Fragment>
            <div className={classNames({
                "flex-row md:gap-x-4 gap-x-1 justify-center container md:max-w-screen-md max-w-screen-sm mx-auto": true,
                "-translate-y-1/2 -mt-1/2": true
            })}>

                {["silver", "gold", "diamond"].map((item, key) => (
                    <Button
                        variant={"gradient"}
                        color={item==="silver" ? "gray" : item==="gold" ? "amber" : "indigo"}
                        className={classNames(({
                            "flex flex-col": true,
                            "md:py-8 py-1 flex-1 px-2 md:px-8 rounded-xl text-white font-medium": true,
                            "transition-all ease-in-out": true,
                            "scale-[.9] opacity-90": tab!==key,
                            "scale-[0.8]": tab===key
                        }))} key={key} onClick={() => {
                        tabOnChange(key)
                        categoryOnChange(categories[0])
                    }
                    }>
                        <span className={"text-xl md:text-2xl capitalize cursor-pointer"}>{item}</span>
                        <span className={"pb-4 capitalize md:text-base text-sm cursor-pointer"}>{t("membership")}</span>
                    </Button>
                ))}

            </div>

            <div
                className={classNames({
                    "flex-row flex-nowrap gap-x-4 container max-w-screen-lg mx-auto justify-between items-center": true,
                    "rounded-xl border border-solid border-gray-300": true,
                    "divide-x divide-solid divide-gray-300": true,
                    "shadow shadow-lg shadow-slate-300": true
                })}
                id="categories">
                {categories.map((item,key) => (
                    <Button variant={"gradient"} color={
                        category?.type===item?.type ? tab===0 ? "gray"
                                : tab===1 ? "amber"
                                    : tab===2 ? "indigo" : "white"
                            : "white"
                    } className={classNames({
                        "flex flex-row gap-x-2 px-6 items-center flex-1 shadow-none border-0": true,
                        "text-gray-400":( (tab===0 && key>1) || (tab===1 && key>2)) && category?.type!==item?.type,
                        "text-gray-600": tab===0,
                        "text-white": category?.type===item?.type
                    })}
                            key={key}
                            disabled={(tab===0 && key>1) || (tab===1 && key>2)}
                            onClick={() => categoryOnChange(item)}
                    >
                        {icon(item?.type, item?.ico)}
                        <span className={classNames({
                            "cursor-pointer select-none": true,
                        })}>{t(item?.title)}</span>
                    </Button>
                ))
                }
            </div>

        </React.Fragment>
    )
};

export default memo(CategoriesTab);
