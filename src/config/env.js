// 配置编译环境和线上环境之间的切换
// this is only applicable during build phase as we are using static files
const buildEnv = process.env

// !!! all vars (dev, sit, uat and prod) must have the same key
// TODO: values to be swapped in at build time later

const devVars = {
  baseUrl: 'http://47.109.58.151:8080/',
}

const uatVars = {
  baseUrl: '',
}

const prodVars = {
  baseUrl: '',
}

// parses the url and returns the corresponding var
// requires all vars to have the same keys
const parseVarsFromUrl = function(url) {
  let currentEnvVars = devVars;
  let detectedEnv = 'dev'
  if (url === uatVars.portalUrl) {
    currentEnvVars = uatVars
    detectedEnv = 'uat'
    console.log('env: parsed env', detectedEnv)
    console.log('env: parsed vars', currentEnvVars)
  } else if (url === prodVars.portalUrl) {
    currentEnvVars = prodVars
    detectedEnv = 'prod'
  }

  return { currentEnvVars, env: detectedEnv };
}

module.exports = {
  buildEnv,
  baseUrl: devVars.baseUrl,
  fusionauthUrl: devVars.fusionauthUrl,
  encryptionKey: devVars.encryptionKey,
}
