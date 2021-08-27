import Head from "next/head";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { ReactElement } from "react";
import { ReactNode } from "react";
import theme from '../../theme';
import { Provider } from "../../ContextApi/DataContext";
import { LayoutTexts, layoutTexts } from "./dictionary";

export default function Layout({
  texts,
  children
}:{
  texts: LayoutTexts,
  children: ReactNode,
}): ReactElement {
  return (
    <Provider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <link rel="icon" href={texts.icon} />
          <title>{texts.headerTitle}</title>
          <meta name="description" content={texts.headerDescription} />
        </Head>
        <div>
          <main>
            {children}
          </main>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

Layout.defaultProps = {
  texts: layoutTexts,
}
