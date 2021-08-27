import { createStyles, makeStyles, Typography, Theme, Button } from "@material-ui/core";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../ContextApi/DataContext";
import ArticleCard from "../ArticleCard/ArticleCard";
import { SUBTYPE_7, gridArticleText as texts } from "./dictionary";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textDecoration: "underline",
    },
    containerLink: {
      marginTop: '2vh',
    },
    link: {
      marginRight: '2vh',
      textDecoration: 'none',
      color: '#18a5fb',
      fontSize: '14px'
    },
    articleCardContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    articleCard: {
      width: '30%',
      margin: '2vh 0'
    },
    showAllArticlesButton: {
      width: '30%',
      margin: '0 auto',
      textAlign: 'center',
    },
  })
);

export default function GridArticle({ articles, tags } : { articles: any, tags: any } ) {
  const { state, dispatch } = useContext(DataContext);
  const [filter, setFilter] = useState(true)

  useEffect(() => {
    dispatch({ type: "SAVE_ARTICLES_VALUE", payload: articles });
  }, [dispatch, articles]);

  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        {texts.title}
      </Typography>
      <div className={classes.containerLink}>
      { 
        tags.map((tag: any) => (
          <Link key={tag.slug} href={`/article/tema/${tag.slug}`}>
            <a className={classes.link}>{tag.tag}</a>
          </Link>
        ))
      }
      </div>

      <div className={classes.articleCardContainer}>
        {
          // show articles with "subtype": "7"
          filter 
            ? (
              articles.map((article: any) =>
                article.subtype === SUBTYPE_7
                  ? (
                  <div key={article._id} className={classes.articleCard}>
                    <ArticleCard article={article} />
                  </div>
                  ) : 
                  ''
              )
            ) : ( // show all articles
              articles.map((article: any) =>
                  (
                  <div key={article._id} className={classes.articleCard}>
                    <ArticleCard article={article} />
                  </div>
                  )
              )
            )
        }
      </div>

      <div className={classes.showAllArticlesButton}>
        <Button variant="outlined" color="primary" onClick={() => setFilter(!filter)}>
          {filter ? texts.grid.showAllButton : texts.grid.showLessButton}
        </Button>
      </div>
    </div>
  );
}





