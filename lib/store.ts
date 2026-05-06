import { create } from 'zustand';

interface UploadState {
  prototypeImage: string | null;
  demoVideo: string | null;
  isUploading: boolean;
  uploadProgress: number;
  currentSlide: number;
  setPrototypeImage: (url: string) => void;
  setDemoVideo: (url: string) => void;
  setIsUploading: (loading: boolean) => void;
  setUploadProgress: (progress: number) => void;
  setCurrentSlide: (slide: number) => void;
  reset: () => void;
}

export const useStore = create<UploadState>((set) => ({
  prototypeImage: null,
  demoVideo: null,
  isUploading: false,
  uploadProgress: 0,
  currentSlide: 0,
  setPrototypeImage: (url) => set({ prototypeImage: url }),
  setDemoVideo: (url) => set({ demoVideo: url }),
  setIsUploading: (loading) => set({ isUploading: loading }),
  setUploadProgress: (progress) => set({ uploadProgress: progress }),
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
  reset: () => set({
    prototypeImage: null,
    demoVideo: null,
    isUploading: false,
    uploadProgress: 0,
    currentSlide: 0,
  }),
}));
