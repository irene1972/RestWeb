# Dev
1. Clonar el .env.template y crear el .env
2. Para levantar la aplicación ejecutar el comando:
    ```
    npm run dev
    ```
3. Para ejecutar la BD usar el comando:
    ```
    docker compose up -d
    ``` 
4. Para migrar la bd y que te genere la cadena POSTGRES_URL:
    ```
    PROD: prisma migrate deploy
    DEV:  npx prisma migrate dev --name init
    ```