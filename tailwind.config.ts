import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      // Aqui Ray
      gridTemplateColumns: {
        app: 'minmax(10rem, 18rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      backgroundImage: {
        'sidebar-texture': "url('/noise-light.png')",
      },

      maxWidth: {
        app: '700px',
      },
    },
  },
  plugins: [],
}
export default config
