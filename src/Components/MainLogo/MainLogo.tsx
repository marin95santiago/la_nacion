import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
import { LogoTexts } from "./dictionary";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerLogo: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    logoHeader: {
      width: "100%",
      textAlign: "center",
    },
  })
);

export default function MainLogo({ texts }:{ texts: LogoTexts}) {
  const classes = useStyles();
  return (
    <div className={classes.containerLogo}>
      <Image
        alt={texts.alt}
        src={texts.src}
        width={texts.width}
        height={texts.height}
        className={classes.logoHeader}
      />
    </div>
  );
}
