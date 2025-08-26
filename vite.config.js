import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // svgr({
    //   svgrOptions: {
    //     plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"], // Включаем SVGO и JSX-плагин
    //     svgoConfig: {
    //       // Здесь укажите конфигурацию SVGO, например:
    //       multipass: true, // Многопроходная оптимизация
    //       plugins: [
    //         { name: "preset-default" }, // Стандартные плагины SVGO
    //         { name: "removeDimensions", active: true }, // Пример: удаление размеров
    //         // Добавьте другие плагины SVGO по необходимости (см. документацию SVGO)
    //       ],
    //     },
    //   },
    // }),
  ],
});
