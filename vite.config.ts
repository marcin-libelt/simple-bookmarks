import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

/*
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env.YOUR_STRING_VARIABLE': JSON.stringify(env.YOUR_STRING_VARIABLE),
            'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
            // If you want to exposes all env variables, which is not recommended
            // 'process.env': env
        },
    };
});
*/
// https://vitejs.dev/config/

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
  // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  });
};
