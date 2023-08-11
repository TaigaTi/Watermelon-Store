import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addDays = (date: Date, days: number): Date => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'wsadmin@email.com' },
    update: {},
    create: {
      name: 'WS Admin',
      email: 'wsadmin@email.com',
      password: 'password',
    },
  });

  const product1 = await prisma.product.upsert({
    where: { name: 'Watermelon Juice' },
    update: {},
    create: {
      name: 'Watermelon Juice',
      description: 'All natural watermelon juice!',
      price: 8,
      image:
      'https://bellyfull.net/wp-content/uploads/2022/06/Watermelon-Juice-blog-4.jpg'
    },
  });

  const product2 = await prisma.product.upsert({
    where: { name: 'Watermelon Ice Cream' },
    update: {},
    create: {
      name: 'Watermelon Ice Cream',
      description: 'Watermelon-flavoured ice cream treats!',
      price: 10,
      image:
      'https://cakewhiz.com/wp-content/uploads/2012/07/Healthy-Watermelon-Ice-Cream-Recipe.jpg'
    },
  });

  const product3 = await prisma.product.upsert({
    where: { name: 'Watermelon Popsicle' },
    update: {},
    create: {
      name: 'Watermelon Popsicle',
      description: 'Cool and refreshing popsicles to beat the summer heat!',
      price: 7,
      image:
      'https://littlesunnykitchen.com/wp-content/uploads/2019/05/Watermelon-popsicles-7.jpg'
    },
  });

  const product4 = await prisma.product.upsert({
    where: { name: 'Watermelon Ice' },
    update: {},
    create: {
      name: 'Watermelon Ice',
      description: 'Cool and refreshing watermelon-flavoured ice!',
      price: 5,
      image:
      'https://www.naivecookcooks.com/wp-content/uploads/2015/07/Watermelon-Ice-Cubes-for-Watermelon-Vodka-Limeade.jpg'
    },
  });

  const product5 = await prisma.product.upsert({
    where: { name: 'Watermelon Body Scrub' },
    update: {},
    create: {
      name: 'Watermelon Body Scrub',
      description: 'Get radiant glowing skin with this refreshing watermelon scrub',
      price: 22,
      image:
      'https://alshafi.sa/web/image/product.image/7550/image_1024/BIELENDA%20VEGAN%20FRIENDLY%20WATERMELON%20BODY%20SCRUB%20200%20G?unique=bdd4cf2'
    },
  });

  const product6 = await prisma.product.upsert({
    where: { name: 'Watermelon Face Serum' },
    update: {},
    create: {
      name: 'Watermelon Face Serum',
      description: 'Give your skin the moisture it need with this revitalising serum!',
      price: 22,
      image:
      'https://www.dotandkey.com/cdn/shop/files/glycolicserum_1024x1024.jpg?v=1690789358'
    },
  });

  const product7 = await prisma.product.upsert({
    where: { name: 'Watermelon Lip Gloss' },
    update: {},
    create: {
      name: 'Watermelon Lip Gloss',
      description: 'Moisturizing and refreshing lip gloss',
      price: 5,
      image:
      'https://target.scene7.com/is/image/Target/GUEST_d9b8cf0c-07cb-408a-954d-4f2e7927a599?wid=488&hei=488&fmt=pjpeg'
    },
  });

  const product8 = await prisma.product.upsert({
    where: { name: 'Watermelon Lip Balm' },
    update: {},
    create: {
      name: 'Watermelon Lip Balm',
      description: 'Moisturizing and refreshing lip balm',
      price: 10,
      image:
      'https://www.fresh.com/dw/image/v2/BDJQ_PRD/on/demandware.static/-/Sites-fresh_master_catalog/default/dw5dcda9ff/Products/H00005475_Campaign_Image_1.jpg?sw=800&sh=800&bgcolor=F7F7F8&sfrm=jpg'
    },
  });

  const shipping1 = await prisma.shipping.upsert({
    where: { type: 'Two Day' },
    update: {},
    create: {
      type: 'Two Day',
      price: 30,
      days: 2,
      eta: addDays(new Date(), 2),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
