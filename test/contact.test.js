import supertest from "supertest";
import { web } from "../src/application/web.js";
import { createTestUser, removeTestUser, removeAllTestContacts } from "./test-util.js";

describe('POST /api/contacts', function () {
    beforeEach(async () => {
        await createTestUser();
    })
    
    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    })

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