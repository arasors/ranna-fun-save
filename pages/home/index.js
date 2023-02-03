import React, {memo, useState, useCallback, useMemo, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import CardsBanner from "home/components/CardsBanner";
import ItemsListView from "home/components/ItemsListView";
import CategoriesTab from "home/components/CategoriesTab";
import Slider from "home/components/Slider";
import {categories, categoriesData} from "0.lib/data/categories";
import HowWork from "home/components/HowWork";
import AppPreview from "home/components/AppPreview";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);
    const [tab, setTab] = useState(0);
    const [category, setCategory] = useState(false);

    useEffect(() => {
        setCategory(categories[0]);
    }, []);


    return(
        <div className={"items-start w-full"}>

            <Slider />
            <CategoriesTab tab={tab} category={category} categoryOnChange={setCategory} tabOnChange={setTab} />
            <ItemsListView category={category} />
            <CardsBanner />
            <ItemsListView category={{pageTitle: "Tourist Attractions", type: "attractions"}} />
            <HowWork />
            <AppPreview />

        </div>
    )
}

export default memo(Home);
