import { create } from 'zustand';

const useStore = create((set) => ({
  
  isDarkMode: true, 
  language: 'en',  

  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;