// NO ARQUIVO: config/webpackDevServer.config.js

const fs = require('fs');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
const paths = require('./paths');
const getHttpsConfig = require('./getHttpsConfig');

const host = process.env.HOST || '0.0.0.0';
const sockHost = process.env.WDS_SOCKET_HOST;
const sockPath = process.env.WDS_SOCKET_PATH; // default: '/ws'
const sockPort = process.env.WDS_SOCKET_PORT;

module.exports = {
  // A CHAVE DE EXPORTAÇÃO CORRIGIDA (com o nome 'configuracaoNova')
  configuracaoNova: function (proxy, allowedHost) {
    const disableFirewall =
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true';
    
    return { // <--- ABRINDO O OBJETO DE CONFIGURAÇÃO DO DevServer
      allowedHosts: disableFirewall ? 'all' : [allowedHost],
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
      },
      compress: true,
      static: {
        directory: paths.appPublic,
        publicPath: [paths.publicUrlOrPath],
        watch: {
          ignored: ignoredFiles(paths.appSrc),
        },
      },
      client: {
        webSocketURL: {
          hostname: sockHost,
          pathname: sockPath,
          port: sockPort,
        },
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      devMiddleware: {
        publicPath: paths.publicUrlOrPath.slice(0, -1),
      },
      https: getHttpsConfig(),
      host,
      historyApiFallback: {
        disableDotRule: true,
        index: paths.publicUrlOrPath,
      },
      proxy,
      
      // A CORREÇÃO DE SETUP MIDDLEWARES MAIS LIMPA
      setupMiddlewares(middlewares, devServer) {
        // Lógica de onBeforeSetupMiddleware (DEVE usar devServer.app.use)
        devServer.app.use(evalSourceMapMiddleware(devServer));

        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }

        // Lógica de onAfterSetupMiddleware (DEVE usar middlewares.push)
        middlewares.push(
            redirectServedPath(paths.publicUrlOrPath),
            noopServiceWorkerMiddleware(paths.publicUrlOrPath)
        );
        
        // DEVE RETORNAR OS MIDDLEWARES MODIFICADOS
        return middlewares; 
      },
    }; // <--- FECHANDO O OBJETO DE CONFIGURAÇÃO DO DevServer
  } // <--- FECHANDO A FUNÇÃO configuracaoNova
}; // <--- FECHANDO O OBJETO module.exports