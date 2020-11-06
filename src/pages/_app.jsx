import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from '@components/Footer';
import Header from '@components/Header';
import '@styles';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="./images/find-abith-hussain.svg" rel="icon" type="image/svg+xml" />
      <link href="./images/find-abith-hussain.png" rel="alternate icon" />
      <link href="./images/find-abith-hussain.svg" rel="mask-icon" color="#000" />

      <title>Find Abith Hussain</title>

      <script
        type="text/javascript"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            ;(function () {
              window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
              heap.load("3091194128");
            })();
          `,
        }}
      />
    </Head>
    <Header />
    <div className="container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default App;
