import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        },
        jwt: {
            jwtSecret: process.env.JWT_SECRET
        },
        apiconfig: {
            port: process.env.API_PORT || 5000
        }
    };
});
 