import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		logOverride: { 'this-is-undefined-in-esm': 'silent' },
	},
	plugins: [react()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			features: path.resolve(__dirname, './src/features'),
			pages: path.resolve(__dirname, './src/pages'),
			types: path.resolve(__dirname, './src/types'),
			store: path.resolve(__dirname, './src/store'),
		},
	},
});
