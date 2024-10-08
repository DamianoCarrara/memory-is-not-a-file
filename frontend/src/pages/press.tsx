declare const dimbox: any;
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../utils/sanityClient";
import { PageTemplate } from "../components/PageTemplate/PageTemplate";
import { PageTitle } from "../components/PageTitle/PageTitle";
import styles from "../../ui/gal.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Press = ({ presses }) => { 
  return (
    <PageTemplate path="/press">
      <PageTitle fullWidth title="Press" />
      <ul className={styles.mainGalList}>
        {presses.length > 0 &&
          presses.map(
            ({
              _id,
              medium = "",
              slug = "",
              photo = [],
              description = "",
              testata = "",
              pressGallery = [],
            }) =>
             _id && (
                <li key={_id} id={_id}>
                  <div className={styles.mediumlinkimg}>
                    <a
                      href={urlFor(photo).url()}
                      data-dimbox="my-gallery"
                      data-dimbox-caption={medium}
                      id={_id}
                    >
                      {photo && <img src={urlFor(photo).url()} />}
                    </a>
                  </div>
                  <div className={styles.mediumlink}>
                    <h2>{testata}</h2>
                    <h3>{medium}</h3>
                    <p>{description}</p>

                    <ul className={styles.gal}>
                      {pressGallery.map((presgal) => (
                        <li key={presgal}>
                          {presgal && (
                            <a
                              href={urlFor(presgal).url()}
                              data-dimbox="my-gallery"
                              data-dimbox-caption={medium}
                              id={_id}
                            >
                              <img src={urlFor(presgal).url()} />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
          )}
      </ul>
    </PageTemplate>
  );
};

export async function getStaticProps() {
  const presses = await client.fetch(groq`
    *[_type == "press"] | order(_createdAt desc)
  `);
  return {
    props: {
      presses,
    },
  };
}

export default Press;
