INSTALACION Y SETUP

npm install = instala todas las dependencias del proyecto
npx playwright install --with-deps = descarga los navegadores y sus dependencias de sistema

EJECUTAR TESTS

npx playwright test = corre todos los tests en modo headless
npx playwright test --headed = corre todos los tests mostrando el navegador
npx playwright test --ui = abre el modo UI interactivo con pick locator y replay
npx playwright test tests/navigation/login-page.spec.ts = corre solo ese archivo especifico
npx playwright test -g "debe navegar" = corre solo los tests cuyo nombre coincide con ese texto
npx playwright test --headed --workers=1 = corre en headed con un solo worker para debuggear
npx playwright test --debug = abre el inspector y pausa en el primer paso de cada test

EXTRACCION DE SELECTORES

npx playwright codegen https://www.saucedemo.com = abre navegador y graba tus acciones generando codigo con selectores
npx playwright codegen --target=javascript https://www.saucedemo.com = igual al anterior forzando el lenguaje de salida

REPORTES

npx playwright show-report = abre el reporte HTML nativo de la ultima corrida
npx playwright show-trace test-results/ruta/trace.zip = abre el trace viewer de un test que fallo
npm run allure:generate = genera el reporte Allure a partir de allure-results
npm run allure:open = abre el reporte Allure generado

CALIDAD DE CODIGO

npm run lint = corre ESLint sobre todo el proyecto
npm run format = aplica Prettier y reescribe los archivos con el formato estandar