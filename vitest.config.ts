import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		deps: {
			// This will prevent Vitest from transforming or handling these modules
			// effectively ignoring any ESM compatibility issues
			inline: [/@gooddata\/.*/],
		}
	}
});
