import { useMemo } from 'react'
import DailyChallengeQuestion from '../types/DailyChallengeQuestion'
import Nullish from '../types/Nullish'
import BlockLink from './BlockLink'
import Chip from './Chip'
import QuestionDateIcon from './QuestionDateIcon'
import QuestionMetaChips from './QuestionMetaChips'

interface QuestionInfoProps {
  question: DailyChallengeQuestion,
  link: Nullish<string>,
}

export default function DailyChallengeQuestionInfo ({ question, link }: QuestionInfoProps) {
  const title = useMemo(() => {
    if (!question) return null
    return `${question.question.frontendQuestionId}. ${question.question.title}`
  }, [question])

  const acceptanceText = useMemo(() => {
    return `${question.question.acRate.toFixed(1)}%`
  }, [question])

  const level = useMemo(() => ({
    Easy: 1,
    Medium: 2,
    Hard: 3,
  } as const)[question.question.difficulty], [question.question.difficulty])

  const isFinished = question.userStatus === 'Finish'

  return (
    <BlockLink href={link}>
      <div className="ts-box is-collapsed is-positive is-left-indicated">
        <div className="ts-content is-dense">
          <div className="ts-header"> Daily Coding Challenge</div>
          <div className="ts-text is-small">{title}</div>

          <div className="ts-space is-small" />

          <Chip>
            <QuestionDateIcon isFinished={isFinished}>
              {question.date}
            </QuestionDateIcon>
          </Chip>

          <div className="ts-space is-small" />

          <QuestionMetaChips
            status={question.question.status}
            level={level}
            acceptance={acceptanceText}
          />
        </div>

        <div className="symbol">
          <span className="ts-icon is-calendar-icon" />
        </div>
      </div>
    </BlockLink>
  )
}
