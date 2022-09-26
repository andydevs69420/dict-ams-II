/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({

    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap")
        }
    }
});
