 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  
  theme: {
    extend: {
      colors: {
        'background': '#fff',                     
        'foreground': '#686868',
        'primary': '#F7941E',
        'primary-foreground': '#F7941E',
        'secondary': '#1CBBB4',
        'secondary-foreground': '#1CBBB4',
        'destructive': "#ED145B",
        'destructive-foreground': '#ED145B',
        'green': '#73BE48',
        'green-foreground': '#73BE48',
        'warm': '#FFF0E5',
        'cream-foreground': '#fff',
        'muted': '#000',
        'muted-foreground': '#000',
      }
    },
  },
  plugins: [],
}
