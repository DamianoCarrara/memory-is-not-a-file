import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../utils/sanityClient";
import styles from "../../../ui/gal.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Press = (props) => {
  const {
    medium = "Missing title",
    description = "missing desc",
    photo = "",
    pressGallery = [],
  } = props.press;

  return (
    <article className={styles.maingal}>
      <div className={styles.mainimg}>
        {photo && <img src={urlFor(photo).width(600).url()} />}
      </div>
      <div className={styles.case}>
        <h1>{medium}</h1>
        <p>{description}</p>
        <ul className={styles.gal}>
          {pressGallery.map((presgal) => (
            <li key={presgal}>
              {presgal && <img src={urlFor(presgal).width(400).url()} />}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "press" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const press = await client.fetch(
    `
    *[_type == "press" && slug.current == $slug][0]{medium, description, photo, pressGallery}
  `,
    { slug }
  );

  return {
    props: {
      press,
    },
  };
}
export default Press;
