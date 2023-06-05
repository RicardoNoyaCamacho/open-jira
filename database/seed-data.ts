interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Hola1 pending",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Hola3 In progress",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Hola3 finished",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
