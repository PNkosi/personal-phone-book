import { PrismaClient } from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') { // When in development
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;