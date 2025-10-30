Proyecto Missionary Resources – UI tipo dashboard con Next.js 16, Tailwind 4, i18n (ES/EN) y Firebase Firestore.

## Desarrollo

Servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000).

Edita `src/app/page.tsx` para la home. La página se recarga al guardar.

Incluye [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) con Geist.

## Firebase

Configura `.env.local` con tus claves `NEXT_PUBLIC_FIREBASE_*` y reinicia el server.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Despliegue

Funciona en Vercel o Firebase App Hosting. Define variables de entorno en el panel antes de build.
