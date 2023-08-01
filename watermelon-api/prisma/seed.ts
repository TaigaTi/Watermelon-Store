import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addDays = (date: Date, days: number): Date => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

async function main() {
    const  user1 = await prisma.user.upsert({
        where: {email: 'wsadmin@email.com'},
        update: {},
        create: {
            name: 'WS Admin',
            email: 'wsadmin@email.com',
            password: 'password',
        },
    });

    const product1 = await prisma.product.upsert({
        where: {name: 'Watermelon Juice'},
        update: {},
        create: {
            name: 'Watermelon Juice',
            description: 'All natural watermelon juice!',
            price: 8,
        },
    });

    const shipping1 = await prisma.shipping.upsert({
        where: {type: 'Two Day'},
        update: {},
        create: {
            type: 'Two Day',
            price: 30,
            days: 2,
            eta:  addDays(new Date, 2),
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async ()=> {
        await prisma.$disconnect();
    })