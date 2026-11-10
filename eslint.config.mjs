import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'

export default defineConfig([
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    // eslint-plugin-react's version 'detect' calls context.getFilename(), which ESLint 10 removed.
    settings: { react: { version: '19.0' } },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      // React Compiler rules (react-hooks v7); this app doesn't use the compiler.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off'
    }
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])
