/* eslint-disable no-console */
console.log('Hallo kita akan membuat RESTful API');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

//! Notes
/*
  *1. Installing Nodemon
  Nodemon > Auto refresh server exec when changes were made

  $ npm install nodemon --save-dev
  $ nodemon server.js

  *2. Installing ESLint
  > ESLint dapat mengevaluasi kode yang dituliskan berdasarkan aturan yang Anda terapkan. 

  $ npm install eslint --save-dev
  $ npx eslint --init

  Kemudian Anda akan diberikan beberapa pertanyaan, silakan jawab pertanyaan yang ada dengan jawaban berikut:

  - How would you like to use ESLint? -> To check, find problems, and enforce code style.
  - What type of modules does your project use? -> CommonJS (require/exports).
  - Which framework did you use? -> None of these. 
  - Does your project use TypeScript? -> N.
  - Where does your code run? -> Node (pilih menggunakan spasi).
  - How would you like to define a style for your project? -> Use a popular style guide.
  - Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
  - What format do you want your config file to be in? -> JSON.
  - Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.


  *3. Disable block
  https://stackoverflow.com/questions/66534759/cors-error-on-request-to-localhost-dev-server-from-remote-site
  chrome://flags/#block-insecure-private-network-requests
*/
