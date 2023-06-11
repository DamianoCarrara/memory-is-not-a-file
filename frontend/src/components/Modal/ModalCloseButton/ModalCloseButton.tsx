import React, { FunctionComponent } from 'react'
import { useTranslation } from 'next-i18next'
import { useStyles } from './ModalCloseButton.styles'
import { Icon, XMark } from '../../Icons'

export interface ModalCloseButtonProps {
  onClick: (e: React.MouseEvent) => void
}

export const ModalCloseButton: FunctionComponent<ModalCloseButtonProps> = ({
  onClick,
}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <button
      aria-label="Close"
      className={classes.modalCloseButton}
      data-testid="modalCloseButton"
      onClick={onClick}
      type="button"
    >
      <Icon icon={XMark} />
      <span className={classes.srOnly}>{t('Close')}</span>
    </button>
  )
}

export default ModalCloseButton
