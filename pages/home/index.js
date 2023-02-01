import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {updateSite} from "0.lib/context/actions/siteAction";

const Home = () => {

    const {t} = useTranslation();
    const site = useSelector(state => state?.site);

    return(
        <div className={"items-start"}>
            {t("title")}

            <Button variant={"gradient"} onClick={() => updateSite({language: site?.language==="tr-TR" ? "en-US" : "tr-TR"})}>
                <span>
                    Dil: {site?.language}
                </span>
            </Button>
        </div>
    )
}

export default memo(Home);
