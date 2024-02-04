import { ReactNode, RefObject, SyntheticEvent, useCallback } from "react"
import styled from "styled-components"

const Dialog = styled.dialog`
  padding: 0;
  width: fit-content;
  margin: auto;
  background: none;
  border: none;

  &::backdrop{
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.3);
  }

  max-width: 375px;
`

const Modal = ({
  modalRef,
  hideOnClickOutside = false,
  children,
  hide,
}: {
  modalRef: RefObject<HTMLDialogElement>
  hideOnClickOutside?: boolean
  children: ReactNode
  hide: () => void;
}) => {
  const handleClick = useCallback(
    (e: SyntheticEvent) => {
      if (hideOnClickOutside && modalRef.current === e.target) {
        hide()
      }
    },
    [hideOnClickOutside],
  )

  return (
    <Dialog ref={modalRef} onClick={handleClick}>
      {children}
    </Dialog>
  )
}

export default Modal;