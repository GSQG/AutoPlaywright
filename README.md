# Playwright Automation

## Instalación y configuración

### 1. Instalar dependencias

Instala todas las dependencias definidas en el proyecto:

```bash
npm install
```

### 2. Instalar navegadores de Playwright

Descarga los navegadores y las dependencias necesarias:

```bash
npx playwright install --with-deps
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
TEST_ENV=qa
BASE_URL=https://www.saucedemo.com
STANDARD_USER=<usuario>
STANDARD_PASSWORD=<contraseña>
```

Para las pruebas con SauceDemo, pueden utilizarse las credenciales de prueba disponibles para el sitio.

> **Importante:** el archivo `.env` no debe incluirse en el repositorio. Las variables de entorno deben mantenerse fuera del control de versiones.

Se recomienda mantener un archivo `.env.example` para documentar la estructura requerida:

```env
TEST_ENV=qa
BASE_URL=https://www.saucedemo.com
STANDARD_USER=
STANDARD_PASSWORD=
```

---

## Ejecución de pruebas

### Ejecutar todos los tests

Ejecuta todos los tests en modo *headless*:

```bash
npx playwright test
```

### Ejecutar tests mostrando el navegador

```bash
npx playwright test --headed
```

### Ejecutar Playwright UI

Abre el modo UI interactivo, con selección de tests, *Pick Locator*, *Replay*, etc.:

```bash
npx playwright test --ui
```

### Ejecutar un archivo específico

```bash
npx playwright test tests/navigation/login-page.spec.ts
```

### Ejecutar tests por nombre

Ejecuta únicamente los tests cuyo nombre coincida con el texto indicado:

```bash
npx playwright test -g "debe navegar"
```

### Ejecutar en modo headed con un solo worker

Útil para realizar debugging controlado:

```bash
npx playwright test --headed --workers=1
```

### Ejecutar en modo debug

Abre el Inspector de Playwright y pausa la ejecución durante el test:

```bash
npx playwright test --debug
```

---

## Extracción de selectores

### Codegen

Abre el navegador y registra las acciones realizadas, generando código con los selectores correspondientes:

```bash
npx playwright codegen https://www.saucedemo.com
```

### Codegen con lenguaje específico

Fuerza JavaScript como lenguaje de salida:

```bash
npx playwright codegen --target=javascript https://www.saucedemo.com
```

---

## Reportes y trazas

### Reporte HTML de Playwright

Abre el reporte HTML generado por la última ejecución:

```bash
npx playwright show-report
```

### Trace Viewer

Abre el trace de una ejecución específica:

```bash
npx playwright show-trace test-results/ruta/trace.zip
```

### Generar reporte Allure

Genera el reporte a partir de los resultados almacenados en `allure-results`:

```bash
npm run allure:generate
```

### Abrir reporte Allure

```bash
npm run allure:open
```

---

## Calidad de código

### ESLint

Ejecuta ESLint sobre el proyecto:

```bash
npm run lint
```

### Prettier

Aplica el formato estándar definido para el proyecto:

```bash
npm run format
```
