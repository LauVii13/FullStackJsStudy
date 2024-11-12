const os = require("node:os");

const platform = os.platform();
console.log("Plataforma do SO: ", platform);

const arch = os.arch();
console.log("Arquitetura do SO: ", arch);

const cpus = os.cpus();
const firstKernel = cpus[0];
console.log("Informações da CPU:", firstKernel);

const memory = os.totalmem();
console.log("Memória total: ", memory / 1024 / 1024 / 1024, " GB");
