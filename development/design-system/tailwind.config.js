/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to all of your source code files here
    // e.g., './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // === Brand ===
        'brand-primary': 'var(--color-brand-blue)',
        'brand-darker': 'var(--color-brand-blue-dark)',
        'brand-lighter': 'var(--color-brand-blue-light)',

        // === Accent ===
        'accent-sage': 'var(--color-accent-sage)',

        // === UI & Text ===
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'border-primary': 'var(--color-border-primary)',
        'ui-disabled': 'var(--color-ui-disabled)',
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',

        // === Feedback ===
        'feedback-success': 'var(--color-feedback-success)',
        'feedback-warning': 'var(--color-feedback-warning)',
        'feedback-error': 'var(--color-feedback-error)',
        'feedback-success-light': 'var(--color-feedback-success-light)',
        'feedback-warning-light': 'var(--color-feedback-warning-light)',
        'feedback-error-light': 'var(--color-feedback-error-light)',
      },
    },
  },
  plugins: [],
};
