/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#6315A9',
          2: '#9447DA'
        },
        yellow: {
          1: '#F9A90E',
        },
        green:{
          1: '#49E0BC'
        },
       
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage:{
        'gradient-purple-dark': "linear-gradient(271.68deg, #0B436C -3%, #6315A9 24.63%, #6315A9 78.62%, #0B436C 110.11%)",
        'gradient-green-light': "linear-gradient(180deg, rgba(73, 224, 188, 0.5) 0%, rgba(61, 182, 153, 0.5) 34%, rgba(4, 26, 21, 0.5) 100%)",
        'gradient-purple-light': 'linear-gradient(180deg, rgba(99, 21, 169, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)',
        'gradient-pink-light': 'linear-gradient(180deg, rgba(241, 75, 225, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)', 
        'gradient-blue-dark': 'linear-gradient(91.69deg, #5A65C7 8.03%, #6714B1 73.71%)',
        'gradient-purplepink-light': "linear-gradient(270.14deg, #9447DA 1.98%, #7D30C3 45.31%, #6315A9 98.4%)",
        
      },
      

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 