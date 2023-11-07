import { resolve } from "path";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import RubyPlugin from "vite-plugin-ruby";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
  ],
  resolve: {
    alias: {
      components: resolve(__dirname, "app/javascript/src/components"),
      src: resolve(__dirname, "app/javascript/src"),
      routes: resolve(__dirname, "app/javascript/src/routes"),
      stylesheets: resolve(__dirname, "app/javascript/stylesheets"),
    },
  },
  build: {
    sourcemap: false,
  },
});