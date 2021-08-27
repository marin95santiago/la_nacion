import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import Navbar from '../../src/Components/Nabvar/Navbar';
import Layout from '../../src/Components/Layout/Layout';

import { TAGS_TO_USE, texts } from './dictionary';
import GridArticle from '../../src/Components/GridArticle/GridArticle';
import { getArticles } from '../../src/Services/APIClient';
import { parseArticlesData, parseAvailableTags } from '../../src/Utils/utils';
import { GetStaticProps } from 'next';
import Footer from '../../src/Components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    mainFilledItemDiv: {
      width: '100%',
      height: '20vh',
      background: '#84C3FF',
    },
    filledItemDiv: {
      width: '100%',
      height: '100%',
      background: '#84C3FF',
    }
  })
);

export default function Articles({ articles, tags } : { articles: any, tags: any }) {
  const classes = useStyles();

  return (
    <Layout
      texts={texts.head}
    >
      <Grid container spacing={3}>
        {/* -- row -- */}
        <Grid item md={1} sm={1} xs={1} />

        <Grid item md={10} sm={10} xs={10} >
          <Navbar texts={texts.navbar} />
        </Grid>

        <Grid item md={1} sm={1} xs={1} />
        {/* -- endrow -- */}

        {/* -- row -- */}
        <Grid item md={1} sm={1} xs={1} />
        <Grid item md={10} sm={10} xs={10} >
          <div className={classes.mainFilledItemDiv}/>
        </Grid>
        <Grid item md={1} sm={1} xs={1} />
        {/* -- endrow -- */}

        {/* -- row -- */}
        <Grid item md={1} sm={1} xs={1} />

        <Grid item md={7} sm={7} xs={12}>
          <GridArticle articles={articles} tags={tags} />
        </Grid>

        <Grid item md={3} sm={3}>
          <div className={classes.filledItemDiv}/>
        </Grid>

        <Grid item md={1} sm={1} xs={1} />
        {/* -- endrow -- */}

        {/* -- row -- */}
        <Grid item md={1} sm={1} xs={1} />

        <Grid item md={10} sm={10} xs={10} >
          <Footer />
        </Grid>

        <Grid item md={1} sm={1} xs={1} />
        {/* -- endrow -- */}
      </Grid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // fetch api
  const articles = await getArticles();
  // parse response for this page
  const parseArticles = parseArticlesData(articles);
  // parse articles tags
  const tags = parseAvailableTags(articles);

  // only use the top 10 bigger tags
  tags.splice(TAGS_TO_USE);
  return {
    props: {
      articles: parseArticles,
      tags,
    },
  }
};