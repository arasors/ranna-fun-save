import React, {memo} from "react";
import "../styles/tailwind.css";
import { Provider } from "react-redux";
import {store} from "0.lib/context/store";
import Page from "Page";

function MyApp({ Component, pageProps }) {
  return(
      <React.StrictMode>
          <Provider store={store}>
              <Page {...pageProps}>
                  <Component {...pageProps} />
              </Page>
          </Provider>
      </React.StrictMode>
  )
}

export default memo(MyApp);
