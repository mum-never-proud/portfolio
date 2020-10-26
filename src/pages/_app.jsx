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
