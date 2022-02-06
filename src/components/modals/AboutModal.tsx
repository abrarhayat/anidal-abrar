import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game derived from -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          This source
        </a>
        {' and '}
        <a
          href="https://github.com/abrarhayat/anidal"
          className="underline font-bold"
        >
          this is the source for the current iteration
        </a>{' '}
        <span>
          <br></br>
          <br></br>Author for this iteration:{' '}
          <a
            href="https://abrarhayat.gatsbyjs.io"
            className="underline font-bold"
            target={'_blank'}
            rel="noreferrer"
          >
            Abrar Hayat
          </a>
        </span>
      </p>
    </BaseModal>
  )
}
