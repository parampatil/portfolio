import { atom } from 'recoil';

// Function to get the system's preferred color scheme
const getPreferredTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

export const themeState = atom({
  key: 'themeState',
  default: getPreferredTheme(), // Set default theme based on system preference
});
