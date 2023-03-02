import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined"
  },
  test: {
    include: ["./__test__/**/*.test.{js,ts}"],
  }
});
