import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";

const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    });
}

const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username : "test",
            password : await bcrypt.hash("kosong", 10),
            name: "test",
            token: "test"
        }
    })
}

const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

export {
    removeTestUser,
    createTestUser,
    getTestUser
}