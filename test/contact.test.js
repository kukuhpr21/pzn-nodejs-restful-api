import supertest from "supertest";
import { web } from "../src/application/web.js";
import { createTestUser, removeTestUser, removeAllTestContacts, createTestContact, getTestContact } from "./test-util.js";
import { logger } from "../src/application/logging.js";

describe('POST /api/contacts', function () {
    beforeEach(async () => {
        await createTestUser();
    });
    
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it ('should can create new contact', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set("Authorization", "test")
            .send({
                first_name: "test",
                last_name: "test",
                email: "test@tos.com",
                phone: "083457384",
            });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.first_name).toBe("test");
        expect(result.body.data.last_name).toBe("test");
        expect(result.body.data.email).toBe("test@tos.com");
        expect(result.body.data.phone).toBe("083457384");
    });
    
    it('should reject if request is not valid', async () => {
        const result = await supertest(web)
            .post('/api/contacts')
            .set("Authorization", "test")
            .send({
                first_name: "",
                last_name: "test",
                email: "test",
                phone: "083457384879385793847583475837459837958374985734857398475389475",
            });
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
    
});

describe('GET /api/contacts/:contactId', function () {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it ('should can get contact', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get('/api/contacts/'+ testContact.id)
            .set("Authorization", "test");
            
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
            
    });
    
    it ('should return 404 if contact id is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .get('/api/contacts/'+ (testContact.id +1))
            .set("Authorization", "test");

        expect(result.status).toBe(404);
            
    });
});

describe('PUT /api/contacts/:contactId', function () {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    });

    it ('should can update existing contact', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/'+ testContact.id)
            .set("Authorization", "test")
            .send({
                first_name: "Kukuh",
                last_name: "Ganteng",
                email: "kukuh@gmail.com",
                phone: "08111111111"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe("Kukuh");
        expect(result.body.data.last_name).toBe("Ganteng");
        expect(result.body.data.email).toBe("kukuh@gmail.com");
        expect(result.body.data.phone).toBe("08111111111");        
    });
    
    it ('should reject if request is invalid', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/'+ testContact.id)
            .set("Authorization", "test")
            .send({
                first_name: "",
                last_name: "",
                email: "kukuh",
                phone: ""
            });

        expect(result.status).toBe(400);
    });
    
    it ('should reject if contact is not found', async () => {
        const testContact = await getTestContact();
        const result = await supertest(web)
            .put('/api/contacts/'+ (testContact.id + 1))
            .set("Authorization", "test")
            .send({
                first_name: "Kukuh",
                last_name: "Ganteng",
                email: "kukuh@gmail.com",
                phone: "08111111111"
            });

        expect(result.status).toBe(404);
    });
});