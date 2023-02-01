import React, {memo} from "react";
import {updateSite} from "0.lib/context/actions/siteAction";
import {Button} from "@material-tailwind/react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const site = useSelector(state => state?.site);
    const {t} = useTranslation();

    return(
        <footer>
            <Button variant={"gradient"} onClick={() => updateSite({language: site?.language==="tr-TR" ? "en-US" : "tr-TR"})}>
                <span>
                    {t("lng")}: {site?.language}
                </span>
            </Button>
        </footer>
    )
};

export default memo(Footer);
