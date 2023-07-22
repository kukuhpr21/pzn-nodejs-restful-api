import supertest from "supertest";
import { web } from "../src/application/web.js";

describe('POST /api/users', function () {
    it ('should can register new user', async () => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username : "kukuh",
            password : "kosong",
            name : "dfs",
        })
        expect();
    });
});