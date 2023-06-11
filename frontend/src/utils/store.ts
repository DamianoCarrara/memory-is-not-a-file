import create from 'zustand'
import { Languages } from '../types'

interface State {
  locale?: Languages
  setLocale: (locale: Languages) => void
}

export const useStore = create<State>()((set) => ({
  locale: undefined,
  setLocale: (locale) => set(() => ({ locale })),
}))
