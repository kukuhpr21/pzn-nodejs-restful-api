import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe('POST /api/users', function () {
    afterEach(async() => {
        await removeTestUser();
    });

    it ('should can register new user', async () => {
        const result = await supertest(web)
        .post('/api/users')
        .send({
            username : "test",
            password : "kosong",
            name : "test",
        })
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();
    });
    
    it('should reject if request is invalid', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: "",
                password: "",
                name: "",
            });
        
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });

    it ('should reject if username already registered', async () => {
        let result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "kosong",
                name: "test",
            });

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("test");
        expect(result.body.data.password).toBeUndefined();
        
        result = await supertest(web)
            .post('/api/users')
            .send({
                username: "test",
                password: "kosong",
                name: "test",
            });
        
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('POST /api/users/login', function () { 
    beforeEach(async () => {
        await createTestUser();
    })
    
    afterEach(async () => {
        await removeTestUser();
    })

    it('should can login', async () => {
        let result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "kosong",
            });
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.token).toBeDefined();
        expect(result.body.data.token).not.toBe("test");
    });
    
    it('should reject login if request is invalid', async () => {
        let result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "",
                password: "",
            });
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
    
    it('should reject login if password wrong', async () => {
        let result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "test",
                password: "salah",
            });
        logger.info(result.body);
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
    
    it('should reject login if username wrong', async () => {
        let result = await supertest(web)
            .post('/api/users/login')
            .send({
                username: "salah",
                password: "kosong",
            });
        logger.info(result.body);
        expect(result.status).toBe(401);
        expect(result.body.errors).toBeDefined();
    });
});