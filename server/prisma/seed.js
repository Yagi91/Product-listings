import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();
async function main() {
  await prisma.product.deleteMany();
  for (let i = 0; i <= 500; i++) {
    await prisma.product.create({
      data: {
        title: faker.commerce.product(),
        amount: Number(faker.commerce.price({ min: 20, max: 1000 })),
        imageUrl: `https://picsum.photos/${700 - i}/200`,
        currency: faker.finance.currencySymbol(),
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
