  declare const dimbox: any;
  import groq from "groq";
  import imageUrlBuilder from "@sanity/image-url";
  import client from "../utils/sanityClient";
  import { PageTemplate } from "../components/PageTemplate/PageTemplate";
  import { PageTitle } from "../components/PageTitle/PageTitle";
  import styles from "../../ui/gal.module.css";

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  const News = ({ newses }) => {
    return (
      <PageTemplate path="/news">
        <PageTitle fullWidth title="News" />
        <ul className={styles.mainGalListx}>
          {newses.length > 0 &&
            newses.map(
              ({
                _id,
                medium = "",
                slug = "",
                photo = [],
                description = "",
                testata = "",
                link  = ""
              }) =>
                _id && (

                  <li key={_id}>
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
                      <h2>{medium}</h2>
                      <h3>{testata}</h3>
                      <p>{description}</p>
                      <p>
                        <a
                          href={link}
                          target="_blank">
                            link
                          </a>
                      </p>
                    </div>
                  </li>
                )
            )}
        </ul>
      </PageTemplate>
    );
  };

  export async function getStaticProps() {
    const newses = await client.fetch(groq`
      *[_type == "news"] | order(_createdAt desc)
    `);
    return {
      props: {
        newses,
      },
    };
  }

  export default News;
