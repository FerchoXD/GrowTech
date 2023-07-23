import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: {
      // Middleware para establecer el tipo de contenido de las imágenes SVG
      transformMiddleware: (req, res, next) => {
        if (req.originalUrl.endsWith('.svg')) {
          res.setHeader('Content-Type', 'image/svg+xml');
        }
        next();
      },
    },
}
})

