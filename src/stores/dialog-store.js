import { create } from "zustand";

const useDialogStore = create((set) => ({
  activeDialog: null,

  openDialog: (type, props = {}) => {
    set({
      activeDialog: {
        type,
        props,
      },
    });
  },

  closeDialog: () => {
    set({
      activeDialog: null,
    });
  },
}));

export default useDialogStore;
