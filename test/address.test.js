import supertest from "supertest";
import { web } from "../src/application/web.js";
import { removeAllTestAddresses } from "./test-util.js";

describe('POST /api/contacts/:contactId/addresses', function () {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    });
    
    afterEach(async () => {
        await removeAllTestAddresses();
        await removeAllTestContacts();
        await removeTestUser();
    });

    it ('should can delete contact', async () => {
        
    });
});