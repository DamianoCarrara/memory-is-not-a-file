  declare const dimbox: any;
  import groq from "groq";
  import Image from "next/image";
  import imageUrlBuilder from "@sanity/image-url";
  import client from "../utils/sanityClient";
  import { PageTemplate } from "../components/PageTemplate/PageTemplate";
  import { PageTitle } from "../components/PageTitle/PageTitle";
  import styles from "../../ui/gal.module.css";

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  function showLogo(source, testata) {
    return <Image src={urlFor(source).url()} alt={testata} className={styles.logolink} width="280" height="200" />
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
                logo = [],
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
                      
                      <p>{ Object.keys(logo).length > 0  && showLogo(logo, testata)}</p>
                      <p>
                        <a
                          href={link}
                          target="_blank">
                            link all'evento
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
