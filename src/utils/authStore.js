import { create } from "zustand";
// Store user data in full applicaiton
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist((set) => ({
    currentUser: null,
    setCurrentUser: (newUser) => set({ currentUser: newUser }),
    removeCurrentUser: () => set({ currentUser: null }),
    updateCurrentUser: (updatedUser) => set({ currentUser: updatedUser }),
  }))
);

export default useAuthStore;
