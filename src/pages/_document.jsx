import { ServerStyleSheet } from 'styled-components';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

const MainDocument = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MainDocument.renderDocument = Document.renderDocument;
MainDocument.getInitialProps = async (ctx) => {
  const styleSheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () => originalRenderPage({
      // eslint-disable-next-line react/jsx-props-no-spreading
      enhanceApp: (App) => (props) => styleSheet.collectStyles(<App {...props} />),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styleSheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    styleSheet.seal();
  }
};

export default MainDocument;
