import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { defaultImage } from './dictionary';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '300px'
  },
  media: {
    height: 140,
  },
});

export default function ArticleCard({article} : {article: any}) {
  const classes = useStyles();

  useEffect(() => {
    console.log(article.promo_items)
  }, [article])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.promo_items ? article.promo_items.basic.url : defaultImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.headlines.basic}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.parseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
