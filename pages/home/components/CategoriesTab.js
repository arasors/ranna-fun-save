import React, {memo, useCallback, useEffect, useState} from "react";
import classNames from "classnames";
import {Button} from "@material-tailwind/react";
import { Tab } from "@headlessui/react";
import {useTranslation} from "react-i18next";
import {categories, tabs} from "0.lib/data/categories";
import {ReactSVG} from "react-svg";
import ItemsListView from "home/components/ItemsListView";

const CategoriesTab = () => {

    const {t} = useTranslation();
    const [tab, setTab] = useState(false);
    const [category, setCategory] = useState(false);

    useEffect(() => {
        setCategory(categories[0]);
        setTab(tabs[0]);
    }, []);


    return(
        <React.Fragment>

            {tabs && <div className={classNames({
                "flex-row md:gap-x-4 gap-x-1 justify-center container md:max-w-screen-md max-w-screen-sm mx-auto": true,
                "-translate-y-1/2 -mt-1/2": true
            })}>
                {tabs.map((item, key) => (
                    <Button
                        variant={"gradient"}
                        color={item?.color}
                        className={classNames(({
                            "flex flex-col": true,
                            "md:py-8 py-1 flex-1 px-2 md:px-8 rounded-xl text-white font-medium": true,
                            "transition-all ease-in-out": true,
                            "scale-[.9] opacity-90": tab?.title!==item?.title,
                            "scale-[0.8]": tab?.title===item?.title
                        }))} key={key} onClick={() => {
                        setTab(item)
                        setCategory(categories[0])
                    }
                    }>
                        <span className={"text-xl md:text-2xl capitalize cursor-pointer"}>{item?.title}</span>
                        <span className={"pb-4 capitalize md:text-base text-sm cursor-pointer"}>{t("membership")}</span>
                    </Button>
                ))}
            </div>}


            <div className={classNames({
                    "container max-w-screen-lg mx-auto": true,
                })}>

                {category && <Tab.Group
                    selectedIndex={categories?.findIndex((i,k) => i?.id===category?.id)}
                    onChange={(val) => setCategory(categories?.find((i,k) => k===val))}
                >

                    <Tab.List className={classNames({
                        "md:w-full w-[98%] p-1 flex-row gap-x-4": true,
                        "border border-solid border-gray-300 mx-1 rounded-xl": true,
                        "overflow-x-auto scrollbar-st sc-hide": true
                    })}>
                        {categories && categories.map((item,key) => (
                            <Tab
                                key={key}
                                value={item?.type}
                                 disabled={!tab?.content?.includes(item?.id)}
                                className={({ selected }) =>
                                    classNames({
                                        'w-full rounded-lg py-2.5 px-3 text-sm font-medium leading-5': true,
                                        "text-gray-400": !tab?.content?.includes(item?.id),
                                        "text-white": tab?.content?.includes(item?.id) && selected,
                                        "text-slate-900": tab?.content?.includes(item?.id) && !selected,
                                        "bg-silver-gradient": tab?.color==="gray" && tab?.content?.includes(item?.id) && selected,
                                        "bg-diamond-gradient": tab?.color==="indigo" && tab?.content?.includes(item?.id) && selected,
                                        "bg-gold-gradient": tab?.color==="amber" && tab?.content?.includes(item?.id) && selected
                                    })}
                            >
                                {({ selected }) => (
                                <div className="flex-row items-center gap-x-3">
                                    <span className={classNames({
                                        "cursor-pointer text-3xl font-rannaIcons": true,
                                        "text-gray-400": !tab?.content?.includes(item?.id),
                                        "text-gray-600": tab?.color==="gray" && tab?.content?.includes(item?.id) && !selected,
                                        "text-indigo-500": tab?.color==="indigo" && tab?.content?.includes(item?.id) && !selected,
                                        "text-amber-500": tab?.color==="amber" && tab?.content?.includes(item?.id) && !selected,
                                        "text-white": tab?.content?.includes(item?.id) && selected
                                    })} width={"10"} height={"10"}>{item?.ico}</span>
                                    {t(item?.title)}
                                </div>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className={"w-full"}>
                        {categories && categories.map((item,key) => (
                            <Tab.Panel key={key} value={item?.type} className={"w-full"}>
                                <ItemsListView category={item} />
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>}

                {/*{categories.map((item,key) => (*/}
                {/*    <Button variant={"gradient"} color={*/}
                {/*        category?.type===item?.type ? tab===0 ? "gray"*/}
                {/*                : tab===1 ? "amber"*/}
                {/*                    : tab===2 ? "indigo" : "white"*/}
                {/*            : "white"*/}
                {/*    } className={classNames({*/}
                {/*        "flex flex-row gap-x-2 px-6 items-center flex-1 shadow-none border-0": true,*/}
                {/*        "text-gray-400":( (tab===0 && key>1) || (tab===1 && key>2)) && category?.type!==item?.type,*/}
                {/*        "text-gray-600": tab===0,*/}
                {/*        "text-white": category?.type===item?.type*/}
                {/*    })}*/}
                {/*            key={key}*/}
                {/*            disabled={(tab===0 && key>1) || (tab===1 && key>2)}*/}
                {/*            onClick={() => setCategory(item)}*/}
                {/*    >*/}
                {/*        {icon(item?.type, item?.ico)}*/}
                {/*        <span className={classNames({*/}
                {/*            "cursor-pointer select-none": true,*/}
                {/*        })}>{t(item?.title)}</span>*/}
                {/*    </Button>*/}
                {/*))*/}
                {/*}*/}
            </div>


        </React.Fragment>
    )
};

export default memo(CategoriesTab);
