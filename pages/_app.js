// import Layout from '../src/components/layout/Layout'
// import '../styles/globals.css'
// import Head from 'next/head'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   ) 
// }

// export default MyApp

import App from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);