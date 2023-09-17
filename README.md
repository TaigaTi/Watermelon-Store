# Watermelon-Store
Project Setup
1. Install NodeJS: https://nodejs.org/en/download
2. Install Docker: https://www.docker.com/
3. Install NestJS: npm i -g @nestjs/cli
4. Install AngularCLI: 
    npm install -g angular-cli
    npm install -g @angular-devkit/build-angular:dev-server

5. Initialize Prisma & Other Dependencies
    npm install -D prisma
    npx prisma init
    npm install tsx --save-dev

6. Register Server on pgAdmin: http://127.0.0.1:51004/help/help/server_dialog.html

API
1. Open 'watermelon-api' folder in terminal
2. Migrate Database: npx prisma migrate dev --name "init"
3. Seed Database: npx prisma db seed
4. Enter 'docker-compose up -d' command
5. Enter 'npm run start:dev' command

UI
1. Open 'watermelon-api' folder in terminal'
2. Enter 'ng serve -o' command
