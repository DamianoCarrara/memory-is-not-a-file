import { NextPage } from 'next'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { PhotoResponse } from '../../types'
import { PageTemplate } from '../../components/PageTemplate/PageTemplate'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { Container } from '../../components/Container/Container'
import { useStyles } from './Photo.styles'
import { getSeoTitleSiteName } from '../../utils/config'
import { Button } from '../../components/Button/Button'
import { PurchaseForm } from './PurchaseForm/PurchaseForm'
import { locations } from '../../utils/locations'
import { isFeatureEnabled } from '../../utils/features'

interface PhotoProps {
  photo?: PhotoResponse
}

export const Photo: NextPage<PhotoProps> = ({ photo }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const [purchaseRequest, showPurchaseRequestModal] = useState(false)

  if (photo) {
    const { title, image, slug, sellingOptions, description } = photo
    const path = locations.photo(slug.current)

    return (
      <PageTemplate path={path} htmlTitle={getSeoTitleSiteName(`${title}`)}>
        <article>
          <PageTitle title={t('Photo album')} />

          <Container>
            <div className={classes.container}>
              <div className={classes.photo}>
                <Image
                  src={image.url}
                  width={300}
                  height={300 / image.aspectRatio}
                  layout="responsive"
                  objectFit="contain"
                  objectPosition="center top"
                  alt={`Photo ${slug.current}`}
                  itemProp="image"
                />
              </div>

              <aside className={classes.aside}>
                <h1 className={classes.photoTitle}>{title}</h1>
                <div className={classes.slug}>#{slug.current}</div>

                <div className={classes.description}>{description}</div>

                {isFeatureEnabled('eCommerce') &&
                  sellingOptions &&
                  sellingOptions.length > 0 && (
                    <>
                      <div className={classes.purchaseButton}>
                        <Button onClick={() => showPurchaseRequestModal(true)}>
                          {t('Buy this photo')}
                        </Button>
                      </div>

                      {purchaseRequest && (
                        <PurchaseForm
                          sellingOptions={sellingOptions}
                          image={image}
                          onCloseRequest={() => showPurchaseRequestModal(false)}
                        />
                      )}
                    </>
                  )}
              </aside>
            </div>
          </Container>
        </article>
      </PageTemplate>
    )
  }

  return null
}
