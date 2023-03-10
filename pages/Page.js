import React, {memo, useState, useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import { ThemeProvider as TWThemeProvider } from "@material-tailwind/react";
import Loader from "0.lib/Loader";
import Login from "auth/login";
import {permission} from "0.lib/data/permission";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import {resources} from "0.lib/data/language";
import Header from "0.lib/Header";
import Footer from "0.lib/Footer";


const Page = ({children }) => {

    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const site = useSelector(state => state?.site);
    const user = useSelector(state => state?.user);

    useEffect(() => {
        setLoaded(true);
    }, []);

    i18n
        .use(detector)
        .use(initReactI18next)
        .init({
            // the translations
            // (tip move them in a JSON file and import them,
            // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
            resources,
            lng: site?.language, // if you're using a language detector, do not define the lng option
            fallbackLng: site?.language,

            interpolation: {
                escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
            }
        })

    const permissionCheck = permission.filter(item => item?.require === true && router.pathname.includes(item?.pathname));
    if (permissionCheck.length > 0 && !user?.isLogin) {
        children = <Login />;
    }

    const checkFooterVisible = useMemo(() => {
        let checkData = {
            profile: router.pathname!=="/profile",
        }

        return Object.values(checkData).every(item => item===true);
    },[router.pathname]);

    // const theme = useMemo(
    //     () =>
    //         createTheme({
    //             palette: {
    //                 mode: site?.theme || 'light',
    //                 primary: {
    //                     main: "#00A79D"
    //                 },
    //                 secondary :{
    //                     main: "#ED1C24"
    //                 }
    //             },
    //         }), [site?.theme]);

    return(
        <React.StrictMode>
            <TWThemeProvider value={"light" || site?.theme}>
                <Header/>
                {!loaded && <Loader/> || children}
                {checkFooterVisible && <Footer/>}
            </TWThemeProvider>
        </React.StrictMode>
    )
}

export default memo(Page);
