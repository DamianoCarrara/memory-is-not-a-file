import React, { useEffect, useCallback } from 'react'
import { ModalCloseButton } from './ModalCloseButton/ModalCloseButton'
import { useStyles } from './Modal.styles'

export interface ModalProps {
  children: React.ReactNode
  title?: string
  footer?: React.ReactNode
  onCloseRequest: () => void
}

export const Modal = ({
  children,
  footer = null,
  onCloseRequest,
  title = undefined,
}: ModalProps) => {
  const classes = useStyles()

  const handleKeyUp = (e: KeyboardEvent): void => {
    const key = e.key as keyof typeof keys
    const keys = {
      Escape: () => {
        e.preventDefault()
        onCloseRequest()
        window.removeEventListener('keyup', handleKeyUp)
      },
    }

    if (keys[key]) {
      keys[key]()
    }
  }

  const keyUpCallback = useCallback(handleKeyUp, [handleKeyUp, onCloseRequest])

  useEffect(() => {
    document.body.classList.add(classes.modalOpen)
    window.addEventListener('keyup', keyUpCallback)

    return (): void => {
      document.body.classList.remove(classes.modalOpen)
      window.removeEventListener('keyup', keyUpCallback)
    }
  }, [keyUpCallback, classes.modalOpen])

  return (
    <section className={classes.modal} tabIndex={-1} role="dialog">
      <div className={classes.modalDialog} role="document">
        <div className={classes.header}>
          {title && <h1 className={classes.title}>{title}</h1>}
          <ModalCloseButton onClick={onCloseRequest} />
        </div>

        <div className={classes.content}>{children}</div>

        {footer && <div className={classes.footer}>{footer}</div>}
      </div>
    </section>
  )
}
