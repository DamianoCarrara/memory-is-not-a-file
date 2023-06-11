import { FieldProps } from 'formik'
import { useStyles } from './InputField.styles'

interface InputFieldProps extends FieldProps {
  label: string
  htmlTag?: 'input' | 'textarea'
}

export const InputField = ({
  label,
  field,
  form,
  htmlTag = 'input',
  ...rest
}: InputFieldProps) => {
  const classes = useStyles()
  const { name } = field
  const HtmlTag = htmlTag

  return (
    <div className={classes.item}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>

      <HtmlTag
        id={name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        className={classes.input}
      />
    </div>
  )
}
