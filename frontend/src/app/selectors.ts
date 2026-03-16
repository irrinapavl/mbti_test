import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from './store'
import { QUESTIONS } from '../public/questions'

export const selectAnswers = (state: RootState) => state.answers.byId

export const selectScores = createSelector(
  [selectAnswers],
  (answers) => {
    const scores: Record<string, number> = {
      Si: 0, Te: 0, Ni: 0, Ti: 0, Fe: 0, Fi: 0, Se: 0, Ne: 0,
    }

    QUESTIONS.forEach((q) => {
      const answer = answers[q.id]
      if (answer === true) {
        scores[q.cogn] = (scores[q.cogn] || 0) + 1
      }
    })

    return scores;
  }
)

export const selectMbtiType = createSelector(
  [selectScores],
  (scores) => {

    const highestScore = Math.max(...Object.values(scores))
    let domFn = ""
    for (const fn in scores) {
      if (scores[fn] === highestScore) domFn = fn
    }
    
    let iE = 'I'
    const extroverted = ["Se", "Fe", "Ne", "Te"]
    if (extroverted.includes(domFn)) iE = 'E'
    
    const sensing = scores.Si + scores.Se
    const intuition = scores.Ni + scores.Ne
    const thinking = scores.Ti + scores.Te
    const feeling = scores.Fi + scores.Fe

    const judging = scores.Te + scores.Fe
    const perceiving = scores.Se + scores.Ne

    const sN = sensing >= intuition ? 'S' : 'N'
    const tF = thinking >= feeling ? 'T' : 'F'
    const jP = judging >= perceiving ? 'J' : 'P'
  

    return `${iE}${sN}${tF}${jP}`
  }
)