import React, {memo} from "react";

const Loader = () => {

    return(
        <React.Fragment>
            <span>
                Yükleniyor...
            </span>
        </React.Fragment>
    )
}

export default memo(Loader);
