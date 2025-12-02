// Script to mark all existing users as onboarded
import { db } from "../lib/db";

async function main() {
  console.log("Marking all existing users with names as onboarded...");

  const result = await db.users.updateMany({
    where: {
      name: {
        not: null
      },
      onboardedAt: null
    },
    data: {
      onboardedAt: new Date(),
      updatedAt: new Date()
    }
  });

  console.log(`Updated ${result.count} users`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
