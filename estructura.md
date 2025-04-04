# 📦 Proyecto: Sugerencias tipo burbuja con estructura de árbol

Este proyecto visualiza sugerencias inteligentes como burbujas animadas usando un árbol binario de búsqueda para mantenerlas ordenadas alfabéticamente.

---

## 🚀 Tecnologías utilizadas
Stack: Next.js + React + TailwindCSS
- [Next.js](https://nextjs.org/) (React)
- TypeScript
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animaciones

---

## 🧱 Estructura del Proyecto

📂 sugerencias-arbol/
├── 📂 public/          # Archivos estáticos (imágenes, fuentes, favicon, etc.)
│   ├── 📂 images/      # Imágenes accesibles
│   │   ├── Abstractgris.jpeg
│   │   ├── AbstractNegro.png
│   ├── favicon.ico      # Favicon
│   ├── nnneon.svg      # Imagen de fondo
│
├── 📂 src/             # Código fuente del proyecto
│   ├── 📂 components/  # Componentes reutilizables
│   │   └── Burbuja.tsx # Componente para la burbuja
│   ├── 📂 lib/         # Funciones y clases para la lógica del árbol
│   │   └── arbol.ts    # Lógica del árbol binario de búsqueda
│   ├── 📂 pages/       # Páginas del sitio (cada archivo aquí es una URL)
│   │   └── index.tsx   # Página principal → http://localhost:3000/
│   ├── 📂 styles/      # Estilos CSS globales o específicos
│   │   └── globals.css # Estilos generales para el proyecto
│
├── 📂 node_modules/    # Dependencias instaladas con npm/yarn/pnpm
│
├── estructura.md       # Descripción de la estructura del proyecto
├── next-env.d.ts       # Configuración de TypeScript para Next.js
├── package.json        # Dependencias y scripts npm
├── package-lock.json   # Archivo de lock para npm
├── postcss.config.mjs  # Configuración de PostCSS (si usas TailwindCSS)
├── README.md           # Información del proyecto
└── tsconfig.json       # Configuración de TypeScript
