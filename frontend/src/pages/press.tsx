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
              slug && (
                <li key={_id}>
                  <div className={styles.mediumlinkimg}>
                    <Link href={`/press/${encodeURIComponent(slug.current)}`}>
                      {photo && <img src={urlFor(photo).url()} />}
                    </Link>
                  </div>
                  <div className={styles.mediumlink}>
                    <h3>
                      <Link href={`/press/${encodeURIComponent(slug.current)}`}>
                        {testata}
                      </Link>
                    </h3>
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
                              id="ok1"
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
