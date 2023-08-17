import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
          netflix: "url(https://raw.githubusercontent.com/dalowa/dalowa-filmsplus/main/public/netflix.png)"
      },
      colors: {
        blueSky: "#88F3EA",
        blueSkyDarker: "#1B2827",
        blueSkyDarker50: "#1B2827BF"

      },
      fontFamily:{
        Oswald: "Oswald, sans-serif"
      }
    }
      
  },
  plugins: [],
}
export default config
