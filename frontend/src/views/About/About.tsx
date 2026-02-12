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
            <p className={classes.intro}>At the entrance of a thrift shop, I spotted a basket full of Kodachrome slides, placed helter skelter in plastic bags. In a row they made up just a few meters of stills, but they recounted familiar stories, which, in their  silent stillness, loudly resonated in me. I felt an urge to salvage them and give them a new voice.</p>
          <p className={classes.intro}>Slides are called "slides" because they are meant to "slide" in front of a projector lenses.<br/>At their peak (between the 40s and the 80s of the last century) those tiny squares of pulp have captured such an endless series of instants that, to our eyes today, they have time "slide" in its wider meaning.  It is a time related to an emotional intensity that accompanied each photo shoot, enriching it with a worth unthinkable of, to our days of hyper-produced and quickly disposable images.</p>
          <p className={classes.intro}>A collection of over a million slides from all over the world. A never-ending collection ideally linking single life scenes so as to "project" them on an extended tale made of a net of emotions where you can find your own.<br/>Because the true "memory extension" is not measured in GB and it is not about IT.<br/>Memory is not a file.</p>
          <p className={classes.intro}>Damiano Carrara</p>

          <p className={classes.video}>
            <video
              controls poster="https://weblario.it/xxx/main-image.jpg" >
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
