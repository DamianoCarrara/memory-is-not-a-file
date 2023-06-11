/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, FormikHelpers, Form, Field } from 'formik'
import { useTranslation } from 'next-i18next'
import { useStyles } from './PurchaseForm.styles'
import { SellingOption, Image } from '../../../types'
import { PurchaseOptionField } from '../PurchaseOptionField/PurchaseOptionField'
import { InputField } from '../../../components/InputField/InputField'
import { Modal } from '../../../components/Modal/Modal'
import { Button } from '../../../components/Button/Button'

interface PurchaseFormProps {
  sellingOptions: SellingOption[]
  image: Image
  onCloseRequest: () => void
}

interface Values {
  sellingOptionsField: {
    numberOfPhotos: number
    description: string
  }[]
  name: string
  address: string
  email: string
  notes: string
}

const getSize = (largeSide: number, aspectRatio: number) =>
  `${Math.round(largeSide / aspectRatio)}x${largeSide}cm`

const getDescription = (
  description: string,
  printLongerSideSize: number,
  aspectRatio: number
) => `${description} (${getSize(printLongerSideSize, aspectRatio)})`

export const PurchaseForm = ({
  sellingOptions,
  image,
  onCloseRequest,
}: PurchaseFormProps) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Formik
      initialValues={{
        name: '',
        address: '',
        email: '',
        notes: '',
        sellingOptionsField: sellingOptions.map((s) => ({
          numberOfPhotos: 0,
          description: getDescription(
            s.title,
            s.printLongerSideSize,
            image.aspectRatio
          ),
        })),
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
      }}
    >
      <Form>
        <Modal
          title={t('Purchase options')}
          onCloseRequest={onCloseRequest}
          footer={
            <Button type="submit" color="primary">
              {t('Buy this photo')}
            </Button>
          }
        >
          <p>{t('purchase-form-intro')}</p>

          {sellingOptions.map((s, i) => (
            <div key={s._id}>
              <Field
                name={`sellingOptionsField.${i}.description`}
                type="hidden"
              />

              <Field
                name={`sellingOptionsField.${i}.numberOfPhotos`}
                component={PurchaseOptionField}
                label={getDescription(
                  s.title,
                  s.printLongerSideSize,
                  image.aspectRatio
                )}
                price={`${s.price} Euro`}
                icon={s.icon}
                isUnique={s.isUnique}
              />
            </div>
          ))}

          <div className={classes.contactFields}>
            <Field
              name="name"
              component={InputField}
              label={t('Contact name')}
              type="text"
            />

            <Field
              name="address"
              component={InputField}
              label={t('Address')}
              htmlTag="textarea"
              rows={2}
            />

            <Field
              name="email"
              component={InputField}
              label={t('E-mail')}
              type="email"
            />

            <Field
              name="notes"
              component={InputField}
              label={t('Additional notes')}
              htmlTag="textarea"
              rows={2}
            />
          </div>
        </Modal>
      </Form>
    </Formik>
  )
}
