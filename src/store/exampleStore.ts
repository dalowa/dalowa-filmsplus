import { create } from 'zustand'

interface userBearStore{
    bears: number;
    increasePopulation: () =>void
}


const useBearStore = create<userBearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore