
#Creating our app


npx create-react-app gallery




#installing dev dependencies :

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest






#creating Tailwind Config file:


npx tailwind init tailwind.js --full



step :   now create post css config file with following code configuration:

   
   
         const tailwindcss = require('tailwindcss');

         module.exports = {
         plugins: [
         tailwindcss('./tailwind.js'),
         require('autoprefixer')
         ]
          }




