import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Twitter, Facebook, Instagram, YouTube } from "@material-ui/icons";
import Link from "next/link";
import MainLogo from "../MainLogo/MainLogo";
import { FooterLink, footerTexts, FooterTexts } from "./dictionary";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: "10vh",
      height: "20vh",
    },
    socialMediaContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
    },
    containerLinks: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    },
    link: {
      textDecoration: "none",
      color: "#18a5fb",
    },
    textRight: {
      textAlign: 'right'
    },
    marginTop: {
      marginTop: '2vh'
    }
  })
);

export default function Footer({ texts }: { texts: FooterTexts }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {/* -- row -- */}
        <Grid item md={3} sm={3} xs={3}>
          <div className={classes.socialMediaContainer}>
            <Facebook />
            <Twitter />
            <Instagram />
            <YouTube />
          </div>
        </Grid>

        <Grid item md={6} sm={6} xs={6}>
          <MainLogo texts={texts.mainLogo} />
        </Grid>

        <Grid item md={3} sm={3} xs={3}>
          <Button>Google play</Button>
        </Grid>
        {/* -- end row -- */}
      </Grid>
      <hr />
      <Grid container spacing={3} className={classes.marginTop}>
        {/* -- row -- */}
        <Grid item md={6} sm={6} xs={6}>
          <div className={classes.containerLinks}>
            {/* -- add a new link in dictionary -- */}
            {
              texts.link?.map((link: FooterLink) => 
                <Link key={link.href} href={link.href}>
                  <a className={classes.link}>{link.label}</a>
                </Link>
              )
            }
          </div>
        </Grid>

        <Grid item md={6} sm={6} xs={6}>
          <div>
            <Typography
              variant="body2"
              className={classes.textRight}
            >
              {`${texts.captcha} `}
              <Link href={texts.staticLinks.conditions.href}>
                <a className={classes.link}>{texts.staticLinks.conditions.label}</a>
              </Link>
              {' '}
              <Link href={texts.staticLinks.privacity.href}>
                <a className={classes.link}>{texts.staticLinks.privacity.label}</a>
              </Link>
            </Typography>
          </div>
        </Grid>

        <Grid item md={6} sm={6} xs={6}>
          <div>
            <Typography
              variant="body2"
            >
              {texts.copyright}
            </Typography>
          </div>
        </Grid>

        <Grid item md={6} sm={6} xs={6}>
          <div>
            <Typography
              variant="body2"
              className={classes.textRight}
            >
              {texts.GDA}
            </Typography>
          </div>
        </Grid>
        {/* -- end row -- */}
      </Grid>
    </div>
  );
}

Footer.defaultProps = {
  texts: footerTexts,
}