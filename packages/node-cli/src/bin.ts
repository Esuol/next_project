// #!/usr/bin/env node
// import { program } from 'commander'
// import pkg from '../package.json'
// import * as commands from './commands'

// // 版本号查看
// program.version(pkg.version, '-v, --version', '输出当前工具版本号.')

// // 上传 ali oss
// program
//   .command('oss')
//   .description('Ali OSS 操作')
//   .option('-a, --action <action>', 'upload', 'upload')
//   .option('-c, --config [config...]')
//   .option('-d, --dist <dist>')
//   .option('-m, --mount <mount>', 'prod | dev | test', 'staging')
//   .action(commands.oss)

// // 上传 s3 oss
// program
//   .command('s3')
//   .description('S3 OSS 操作')
//   .option('-a, --action <action>', 'upload', 'upload')
//   .option('-c, --config [config...]')
//   .option('-d, --dist <dist>')
//   .option('-m, --mount <mount>', 'prod | dev | test', 'staging')
//   .option('-s, --style <style>', 'OSS样式处理')
//   .action(commands.s3)

// // 同步 s3 到本地
// program.command('sync').description('S3 OSS 同步').option('-c, --config [config...]').option('-p, --prefix <prefix>').option('-d, --dist <dist>').action(commands.sync)

// // 同步 s3 到另一个 s3
// program.command('clone').description('S3 OSS 同步').option('-c, --config <config>').action(commands.clone)

// // // 运行服务
// // program
// //   .command('serve')
// //   .description('启动单个活多个构建项目')
// //   .option('-m, --mode <mode>', 'production | development', 'development')
// //   .option('-s, --ssl')
// //   .option('-p, --packages <dir>', 'Multi modules packages dir.', './trantor.packages.json')
// //   .option('-t --port <port>', 'Server port.', '8399')
// //   .action(commands.serve);

// // // 构建
// // program
// //   .command('build')
// //   .description('构建单个或者多个微前端')
// //   .option('-m, --mode <mode>', 'production | development', 'production')
// //   .option('-w, --watch', 'Watch files for changes.', false)
// //   .option('-p, --packages <dir>', 'Multi modules packages dir.', './trantor.packages.json')
// //   .option('-d --development', 'do not compress output files', false)
// //   .action(commands.build);

// // // 同步 librarys
// // program
// //   .command('librarys')
// //   .description('本地三方库管理')
// //   .option('-s --sync', '同步到本地三方库', false)
// //   .action(commands.librarys)

// // // 初始化重构项目
// // program
// //   .command('init')

// // // 二开
// // program
// //   .command('override [projectName]')
// //   .description('生成二开项目')
// //   .action(commands.override)

// program.parse(process.argv)
