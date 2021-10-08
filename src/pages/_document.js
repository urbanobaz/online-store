import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            async
            src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
          ></script>
          <div
            hidden
            id="snipcart"
            data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
            data-config-modal-style="side"
          >
            <address-fields section="top">
              <div>
                <snipcart-label for="phone">Phone number</snipcart-label>
                <snipcart-input name="phone"></snipcart-input>
              </div>
            </address-fields>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
