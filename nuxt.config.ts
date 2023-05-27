
import { defineNuxtConfig } from 'nuxt/config';
import { readdirSync } from 'fs';

export default defineNuxtConfig({
    css: [
        // IL FILE PRINCIPALE SCSS
        "~/assets/style/main.scss",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // ABBIAMO CREATO UN IMPORTAZIONE AUTOMATICA DI TUTTO QUELLO CHE E' 
                    // PRESENTE DENTRO LA CARTELLA STYLE/VARIABLES
                    additionalData: `${readdirSync('./assets/style/variables')
                        .map(file => `@use "@/assets/style/variables/${file}" as *;`)
                        .join('\n')}`
                }
            }
        }
    }
});