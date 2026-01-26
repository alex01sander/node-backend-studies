## O que são Módulos?

No **Node.js**, módulos são arquivos isolados que encapsulam código e expõem apenas o que for necessário por meio de `exports`.

Cada arquivo é tratado como um **módulo independente**, o que traz benefícios importantes:

- Evita vazamento de escopo
- Melhora a organização do código
- Facilita reutilização e manutenção

### Sistema de módulos no Node.js

O Node.js utiliza, por padrão, o **CommonJS**, baseado em:

- `require()` para importar
- `module.exports` ou `exports` para exportar

Exemplo:

```js
// utils.js
exports.printName = (name) => {
  console.log(name);
};

// index.js
const utils = require("./utils");
utils.printName("Alex");

ES Modules (ESM)

Além do CommonJS, o Node.js também suporta ES Modules, muito comuns em projetos modernos e no Next.js, utilizando:

import para importar

export para exportar

Exemplo:

export function printName(name) {
  console.log(name);
}

import { printName } from "./utils.js";
printName("Alex");


Resumo: módulos permitem dividir o sistema em partes pequenas, organizadas e reutilizáveis, sendo um dos pilares do desenvolvimento backend com Node.js.
```
