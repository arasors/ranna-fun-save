import React, {memo} from "react";
import {useSelector} from "react-redux";

const Login = () => {

    const user = useSelector(state => state?.user);

    return(
        <React.Fragment>
            <span>{user?.isLogin ? "Hoşgeldin" : "Giriş yap"}</span>
        </React.Fragment>
    )
}

export default memo(Login);
