import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type MobileMenuState = true | false

interface IAppState {
  mobileMenuState: MobileMenuState
  setMobileMenuState: (menuState: MobileMenuState) => void
}

export const useAppState = create<IAppState>()(
  immer((set) => ({
    mobileMenuState: false,
    setMobileMenuState: (mobileMenuState) =>
      set((state) => {
        state.mobileMenuState = mobileMenuState
      }),
  }))
)
