import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the animal name in 6 tries. After each guess, the color of the
        tiles will change to show how close your guess was to the animal name.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          value="W"
          status="correct"
          isRevealing={true}
          isCompleted={true}
        />
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="A" />
        <Cell
          value="N"
          status="present"
          isRevealing={true}
          isCompleted={true}
        />
        <Cell value="D" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="L" />
        <Cell value="O" />
        <Cell value="T" status="absent" isRevealing={true} isCompleted={true} />
        <Cell value="H" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is not in the word in any spot.
      </p>
      <br></br>
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
