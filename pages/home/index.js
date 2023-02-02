import React, {memo, useState, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Button, IconButton, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import {ReactSVG} from "react-svg";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);
    const [tab, setTab] = useState(0);
    const [category, setCategory] = useState(0);

    const categories = useMemo(() => {
        return [
            {
                title: "dining",
                ico: <ReactSVG src={"icons/dinner.svg"} alt={"ico"} className={classNames({
                    "cursor-pointer scale-95": true,
                    "text-silver": tab===0 && category!==0,
                    "text-gold": tab===1 && category!==0,
                    "text-indigo-500": tab===2 && category!==0,
                    "text-white": category===0
                })} width={"10"} height={"10"} />
            },
            {
                title: "attractions",
                ico: <ReactSVG src={"icons/photo.svg"} alt={"ico"} className={classNames({
                    "cursor-pointer scale-95": true,
                    "text-silver": tab===0 && category!==1,
                    "text-gold": tab===1 && category!==1,
                    "text-indigo-500": tab===2 && category!==1,
                    "text-white": category===1
                })} width={"10"} height={"10"} />
            },
            {
                title: "shopping",
                ico: <ReactSVG src={"icons/basket.svg"} alt={"ico"} className={classNames({
                    "cursor-pointer scale-95": true,
                    "text-gray-400": tab===0 && category!==2,
                    "text-gold": tab===1 && category!==2,
                    "text-indigo-500": tab===2 && category!==2,
                    "text-white": category===2
                })} width={"10"} height={"10"} />
            },
            {
                title: "health",
                ico: <ReactSVG src={"icons/health.svg"} alt={"ico"} className={classNames({
                    "cursor-pointer scale-95": true,
                    "text-gray-400": tab===0 || tab===1 && category!==3,
                    "text-indigo-500": tab===2 && category!==3,
                    "text-white": category===3
                })} width={"10"} height={"10"} />
            }
        ];
    }, [category, tab]);

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
                            variant={"gradient"}
                            color={item==="silver" ? "gray" : item==="gold" ? "amber" : "indigo"}
                            className={classNames(({
                                "flex flex-col": true,
                                "md:py-8 py-1 md:px-20 px-4 rounded-xl text-white font-medium": true,
                                "transition-all ease-in-out": true,
                                "scale-90 opacity-90": tab!==key,
                                "scale-105": tab===key
                            }))} key={key} onClick={() => {
                                setTab(key)
                                setCategory(0)
                            }
                        }>
                            <span className={"text-xl md:text-2xl cursor-pointer"}>{item?.toUpperCase()}</span>
                            <span className={"pb-4 normal-case cursor-pointer"}>{t("membership")}</span>
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

            <div className={"w-full py-12"} />

            <div
                className={classNames({
                    "flex-row gap-x-4 container max-w-screen-lg mx-auto justify-between items-center py-2": true,
                    "rounded-xl border border-solid border-gray-300": true,
                    "divide-x divide-solid divide-gray-300": true,
                    "shadow shadow-lg shadow-slate-300": true
                })}
                id="categories">
                {categories.map((item,key) => (
                        <Button variant={"gradient"} color={
                            category===key ? tab===0 ? "gray"
                                    : tab===1 ? "amber"
                                        : tab===2 ? "indigo" : "white"
                                : "white"
                        } className={classNames({
                            "flex flex-row gap-x-2 px-6 items-center flex-1": true,
                            "text-gray-400":( (tab===0 && key>1) || (tab===1 && key>2)) && category!==key,
                            "text-gray-600": tab===0,
                            "text-white": category===key
                        })}
                                key={key}
                                disabled={(tab===0 && key>1) || (tab===1 && key>2)}
                                onClick={() => setCategory(key)}
                        >
                            {item?.ico}
                            <span className={classNames({
                                "cursor-pointer select-none": true,
                            })}>{item?.title}</span>
                        </Button>
                    ))
                }
            </div>

            <div className={classNames({
                "mt-8 container mx-auto w-full": true
            })}>
                <div className="flex-row justify-between items-center w-full">
                    <h3 className={classNames({
                        "py-3 text-3xl capitalize": true
                    })}>{categories?.find((i,k) => k===category)?.title}</h3>
                    <IconButton variant={"gradient"} color={"white"} className={"rounded-full text-sm p-1"}>
                        <ReactSVG src={"icons/settings.svg"} alt={"ico"} className={"text-primary scale-90"} />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default memo(Home);
