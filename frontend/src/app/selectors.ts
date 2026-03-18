import { createSelector } from '@reduxjs/toolkit'
import { type RootState } from './store'
import { QUESTIONS } from '../public/questions'
import { types } from '../public/types'

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
    const typeScores: Record<string, number> = {
      ESTP: 0,
      ISTP: 0,
      ESTJ: 0,
      ISTJ: 0,
      ESFP: 0,
      ISFP: 0,
      ENFP: 0,
      INFP: 0,
      ENTP: 0,
      INTP: 0,
      ENTJ: 0,
      INTJ: 0,
      ENFJ: 0,
      INFJ: 0,
      ESFJ: 0,
      ISFJ: 0,
    }

    types.forEach((type) => {
      const typeTotal = []
      for (let i = 1; i < 9; i++) {
        const fn = type.order[i]
        console.log(fn)
        typeTotal.push(scores[fn] * i)
      }
      console.log(type.name, typeTotal)
      typeScores[type.name] = typeTotal.reduce((acc, curr) => acc + curr, 0)
    })

    const sortedScores = Object.entries(typeScores).sort((a, b) => b[1] - a[1])
    console.log(sortedScores)
    
    if (sortedScores[0][1] === 0) return ""
    else return sortedScores[0][0]
  }
)