import React, {memo, useState, useEffect, useMemo} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import Loader from "0.lib/Loader";
import Login from "auth/login";
import {permission} from "0.lib/data/permission";

const Page = ({children }) => {

    const router = useRouter();
    const [loaded, setLoaded] = useState(false);
    const site = useSelector(state => state?.site);
    const user = useSelector(state => state?.user);

    useEffect(() => {
        setLoaded(true);
    }, []);


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

    return(
        <React.Fragment>
            <ThemeProvider value={site?.theme || "light"}>
                {!loaded && <Loader /> || children}
            </ThemeProvider>
        </React.Fragment>
    )
}

export default memo(Page);
