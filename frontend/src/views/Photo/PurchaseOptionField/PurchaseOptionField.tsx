import { FieldProps } from 'formik'
import clsx from 'clsx'
import { useStyles } from './PurchaseOptionField.styles'
import { SellingIcon } from '../../../components/SellingIcon/SellingIcon'
import { Icon, Minus, Plus } from '../../../components/Icons'

interface PurchaseOptionFieldProps extends FieldProps {
  label: string
  price: string
  icon: 'silver' | 'gold' | null
  isUnique: boolean
}

export const PurchaseOptionField = ({
  label,
  price,
  icon,
  isUnique,
  field,
  form,
  ...rest
}: PurchaseOptionFieldProps) => {
  const classes = useStyles()

  const { setFieldValue } = form
  const { name } = field
  const value = field.value as number
  const decreasingDisabled = value <= 0
  const increasingDisabled = isUnique && value >= 1

  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <div className={classes.icon}>
          <SellingIcon type={icon} size={21} />
        </div>

        <div className={classes.label}>{label}</div>
      </div>

      <div className={classes.secondary}>
        <div className={classes.price}>{price}</div>

        <div className={classes.field}>
          <button
            type="button"
            onClick={() =>
              !decreasingDisabled && setFieldValue(name, value - 1)
            }
            disabled={decreasingDisabled}
            className={clsx(
              classes.button,
              classes.decreaseButton,
              decreasingDisabled && classes.disabled
            )}
          >
            <Icon icon={Minus} size="0.75em" className={classes.buttonIcon} />
          </button>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="number" {...field} {...rest} className={classes.input} />
          <button
            type="button"
            onClick={() =>
              !increasingDisabled && setFieldValue(name, value + 1)
            }
            disabled={increasingDisabled}
            className={clsx(
              classes.button,
              classes.increaseButton,
              increasingDisabled && classes.disabled
            )}
          >
            <Icon icon={Plus} size="0.75em" className={classes.buttonIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}
