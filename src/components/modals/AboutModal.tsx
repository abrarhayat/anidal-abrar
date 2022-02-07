import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love.
        <br></br>
        <br></br>
        <a
          href="https://github.com/abrarhayat/anidal"
          className="underline font-bold"
          target={'_blank'}
          rel="noreferrer"
        >
          This is the source for the current iteration
        </a>
        {' and '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
          target={'_blank'}
          rel="noreferrer"
        >
          this is the base source
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
