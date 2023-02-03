import React, {memo, useState, useCallback, useMemo, useEffect} from "react";
import CardsBanner from "home/components/CardsBanner";
import ItemsListView from "home/components/ItemsListView";
import CategoriesTab from "home/components/CategoriesTab";
import Slider from "home/components/Slider";
import HowWork from "home/components/HowWork";
import AppPreview from "home/components/AppPreview";

const Home = () => {

    return(
        <div className={"items-start w-full"}>

            <Slider />
            <CategoriesTab />
            <CardsBanner />
            <div className="max-w-screen-lg container mx-auto">
                <ItemsListView category={{pageTitle: "Tourist Attractions", type: "attractions"}} />
            </div>
            <HowWork />
            <AppPreview />

        </div>
    )
}

export default memo(Home);
