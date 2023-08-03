const radii = {
  'none': 0,
  'xs': 2,
  'sm': 4,
  'md': 16,
  'lg': 18,
  'xl': 24,
  '2xl': 16,
  '3xl': 32,
  'full': 9999,
};

export type IRadii = keyof typeof radii;

export default radii;
