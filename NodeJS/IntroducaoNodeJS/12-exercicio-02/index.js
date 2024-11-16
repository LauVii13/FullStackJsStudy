const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

const systemPlatformMap = {
  win32: "Windows",
  linux: "Linux",
  darwin: "MacOS",
  freebsd: "FreeBSD",
};

function getSystemInfo() {
  const system = os.platform();
  const arch = os.arch();
  const cpu = os.cpus()[0].model;

  const uptime = os.uptime();
  const uptimeDays = Math.floor(uptime / 60 / 60 / 24);
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60;

  const uptimeHours = Math.floor((uptime - uptimeDaysInSeconds) / 60 / 60);
  const uptimeHoursInSeconds = uptimeHours * 60 * 60;

  const uptimeMinutes = Math.floor(
    (uptime - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60
  );
  const uptimeMinutesInSeconds = uptimeMinutes * 60;

  const uptimeSeconds = Math.floor(
    uptime - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinutesInSeconds
  );

  const uptimeFinal = `${uptimeDays} : ${uptimeHours} : ${uptimeMinutes} : ${uptimeSeconds}`;

  const ramTotal = os.totalmem() / 1024 / 1024 / 1024;
  const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024;
  const ramUsagePercent = (ramUsage * 100) / ramTotal;

  return {
    system,
    arch,
    cpu,
    uptimeFinal,
    ramTotal,
    ramUsage,
    ramUsagePercent,
  };
}
function printLog({
  system,
  arch,
  cpu,
  uptimeFinal,
  ramTotal,
  ramUsage,
  ramUsagePercent,
}) {
  const text = `DETALHES DO SISTEMA:
Sistema Operacional: ${systemPlatformMap[system]}
Arquitetura: ${arch}
Modelo do Processador: ${cpu}
Tempo de Atividade do Sistema: ${uptimeFinal}
Uso de memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(
    2
  )} GB (${ramUsagePercent.toFixed(2)}%)
---------------------------------------
`;
  console.log(text);
}

function saveLog({
  system,
  arch,
  cpu,
  uptimeFinal,
  ramTotal,
  ramUsage,
  ramUsagePercent,
}) {
  const text = `DETALHES DO SISTEMA:
Sistema Operacional: ${systemPlatformMap[system]}
Arquitetura: ${arch}
Modelo do Processador: ${cpu}
Tempo de Atividade do Sistema: ${uptimeFinal}
Uso de memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(
    2
  )} GB (${ramUsagePercent.toFixed(2)}%)
---------------------------------------
`;

  const logDir = path.join(__dirname, "log");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const logPath = path.join(logDir, "log.txt");

  fs.appendFileSync(logPath, text);
}

setInterval(() => {
  const systemInfo = getSystemInfo();
  printLog(systemInfo);
  saveLog(systemInfo);
}, 1000);
