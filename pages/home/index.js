import React, {memo, useState, useCallback, useMemo} from "react";
import {useTranslation} from "react-i18next";
import {Button, IconButton, Typography} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import {ReactSVG} from "react-svg";
import Image from "next/image";
import Link from "next/link";
import {FaAngleRight, TfiAngleRight} from "react-icons/all";

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

    const categoriesList = useMemo(() => {
        return [
            {
                title: "Restaurant 1",
                image: require("/public/images/home/dining/Rectangle 31-1.png")
            },
            {
                title: "Restaurant 2",
                image: require("/public/images/home/dining/Rectangle 31-2.png")
            },
            {
                title: "Restaurant 3",
                image: require("/public/images/home/dining/Rectangle 31-3.png")
            },
            {
                title: "Restaurant 4",
                image: require("/public/images/home/dining/Rectangle 31-4.png")
            },
            {
                title: "Restaurant 5",
                image: require("/public/images/home/dining/Rectangle 31-5.png")
            },
            {
                title: "Restaurant 6",
                image: require("/public/images/home/dining/Rectangle 31.png")
            }
        ];
    }, []);

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
                    "flex-row gap-x-4 container max-w-screen-lg mx-auto justify-between items-center": true,
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

                {[{i:0,k:2},{i:2,k:4},{i:4,k:6}].map((i,k) => (
                    <div className="flex-row w-full gap-8" key={k}>
                        {categoriesList?.slice(i?.i,i?.k).map((item,key) => (
                            <div className={"flex-col flex-1 items-center"} key={key}>
                                <div className={classNames({
                                    "flex-1 my-2 rounded-xl h-44 overflow-hidden": true,
                                    "w-full": true
                                })}>
                                    <Image src={item?.image} alt={item?.title} className={"h-full w-full object-cover"} />
                                </div>
                                <span className={"pb-3 text-lg font-medium"}>{item?.title}</span>
                            </div>
                        ))}
                    </div>
                ))}

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

                            {["diamond","gold","silver"].map((item,key) => (
                                <div className={`card ${item}`} key={key}>
                                    <div className="card__info">
                                        <div className="card__logo">
                                            <Image src={require("/public/logo-white.svg")} alt={t("title")} className={"w-32"} />
                                            <div className={"flex-row gap-x-1 items-center pr-3"}>
                                                <div className="h-10 w-0.5 rounded mx-2 bg-white"></div>
                                                <span>{t(`${item}-expired-time-text`)}</span>
                                            </div>
                                        </div>
                                        {/*<div className="card__chip">*/}
                                        {/*    <svg className="card__chip-Lines" role="Img" width="40px" height="40px" viewBox="0 0 200 200" aria-label="chip">*/}
                                        {/*        <g opacity="0.8">*/}
                                        {/*            <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*            <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="4" />*/}
                                        {/*        </g>*/}
                                        {/*    </svg>*/}
                                        {/*    <div className="card__chip-Texture"></div>*/}
                                        {/*</div>*/}
                                        <div className="card__name" aria-label={`${item}-member`}>{t(`${item}-member`)}</div>

                                        <div className="card__number">
                                            <span className="card__digit-group">0000</span>
                                            <span className="card__digit-group">0021</span>
                                            <span className="card__digit-group">4748</span>
                                            <span className="card__digit-group">3647</span>
                                        </div>
                                        {/*<div className="card__vendor" role="Img" aria-labelledby="card-Vendor">*/}
                                        {/*    <span id="card-Vendor" className="card__vendor-Sr">Mastercard</span>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="card__type">
                                        <div className="circle_card__type">
                                            {/*<Image src={require("/public/icons/dinner.svg")?.default} alt={"Dinner"} />*/}
                                            {/*<Image src={require("/public/icons/photo.svg")?.default} alt={"Photo"} />*/}
                                            {/*<Image src={require("/public/icons/basket.svg")?.default} alt={"Basket"} />*/}
                                            {/*<Image src={require("/public/icons/health.svg")?.default} alt={"Health"} />*/}

                                            <div className="text-wrapper">
                                                <span>A</span>
                                                <span>B</span>
                                                {(item==="gold" || item==="diamond") && (
                                                    <span>C</span>
                                                )}
                                                {item==="diamond" && (
                                                    <span>D</span>
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                    <div className="card__texture"></div>
                                    <div className="card__texture2" hue={223}></div>
                                </div>
                            ))}

                        </div>



                    </div>
                    <div className={"flex-1"} />

                </div>
            </div>

        </div>
    )
}

export default memo(Home);
