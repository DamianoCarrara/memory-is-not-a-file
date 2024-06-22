import { NextPage } from "next";
import { useTranslation, Trans } from "next-i18next";
import Image from "next/image";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Container } from "../../components/Container/Container";
import { getSeoTitleSiteName } from "../../utils/config";
import { locations } from "../../utils/locations";
import { useStyles } from "./About.styles";
import mainImage from "./images/main-image.jpg";

export const About: NextPage = () => {
  const { t } = useTranslation("about");
  const classes = useStyles();

  return (
    <PageTemplate
      path={locations.about}
      htmlTitle={getSeoTitleSiteName(t("title"))}
      yellowBackground
    >
      <article>
        <PageTitle title={t("title")} />

        <Container>
          <p className={classes.intro}>
            <Trans i18nKey="intro" ns="about" />
          </p>

          <p className={classes.intro}>
            <Trans i18nKey="intro2" ns="about" />
          </p>

          <p className={classes.intro}>
            <Trans i18nKey="intro3" ns="about" />
          </p>

          <p className={classes.intro}>Damiano Carrara</p>

          <p className={classes.video}>
            <video
              controls preload poster="https://weblario.it/xxx/main-image.jpg" >
              <source src="https://weblario.it/xxx/minaf.mp4" />
              Your browser does not support the video tag...
            </video>
          </p>

          <ol className={classes.bulletPoints}>
            <li>
              <span>1.</span>
              {t("bulletPoints1")}
            </li>
            <li>
              <span>2.</span>
              {t("bulletPoints2")}
            </li>
            <li>
              <span>3.</span>
              {t("bulletPoints3")}
            </li>
          </ol>
        </Container>
      </article>
    </PageTemplate>
  );
};
