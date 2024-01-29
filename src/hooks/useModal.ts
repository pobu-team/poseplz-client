import { useCallback, useRef } from 'react'

export const toggleScroll = (force?: boolean) => {
  document.body!.classList.toggle(
    'no-scroll',
    typeof force === 'boolean' ? force : document.querySelectorAll('dialog[open]').length > 0,
  )
}

const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.showModal()
      toggleScroll(true)
    }
  }, [])

  const closeModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close()
      toggleScroll()
    }
  }, [])

  return {
    modalRef,
    openModal,
    closeModal,
  }
}

export default useModal
