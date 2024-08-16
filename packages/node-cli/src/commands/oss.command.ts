// import { join, resolve } from 'path';
// import { promisify } from 'util';
// import { nanoid } from 'nanoid';
// import dayjs from 'dayjs';
// import glob from 'glob';
// import fs from 'fs';
// import OSS from 'ali-oss';

// export default async (options: any) => {
//   const { dist = '.', config, mount = 'dev' } = options;
//   const PWD_DIR = resolve(process.cwd(), dist);
//   const DIR_PREFIX = join('fe-resources', mount);
//   const NAMESPACE = join(PWD_DIR, 'namespace.json');
//   const VERSION_LIST = join(DIR_PREFIX, 'versions.json');
//   const VERSION_LATEST = join(DIR_PREFIX, 'latest.json');

//   const [ak, sk, bucket] = config;
//   const client = new OSS({
//     accessKeyId: ak,
//     accessKeySecret: sk,
//     bucket,
//   });

//   const ossOpts = { headers: { 'Cache-Control': 'no-cache' } };

//   try {
//     await client.head(VERSION_LIST, ossOpts);
//   } catch (err) {
//     await client.put(VERSION_LIST, Buffer.from(JSON.stringify({})), ossOpts);
//   }

//   try {
//     await client.head(VERSION_LATEST, ossOpts);
//   } catch (err) {
//     await client.put(VERSION_LATEST, Buffer.from(JSON.stringify({})), ossOpts);
//   }

//   const paths = await glob('**/*', { cwd: PWD_DIR, nodir: true, maxDepth: 10 });

//   if (!(await fs.existsSync(NAMESPACE))) {
//     throw new Error('不存在 namespace.json .');
//   }

//   const namespace = JSON.parse(
//     await promisify(fs.readFile)(NAMESPACE, { encoding: 'utf-8' })
//   );

//   const versions = JSON.parse((await client.get(VERSION_LIST)).content);
//   const latest = JSON.parse((await client.get(VERSION_LATEST)).content);

//   if (!versions[namespace.namespace]) versions[namespace.namespace] = [];

//   const DIR = dayjs().format('YYYYMMDDHHmmss') + '-' + nanoid(4);

//   latest[namespace.namespace] = {
//     prefix: join(DIR_PREFIX),
//     dirname: DIR,
//     ...namespace,
//   };

//   versions[namespace.namespace].push({
//     createdAt: new Date().getTime(),
//     namespace: join(DIR, 'namespace.json'),
//   });

//   paths.map((pathname) => {
//     client.put(join(DIR_PREFIX, DIR, pathname), join(PWD_DIR, pathname));
//   });

//   client.put(VERSION_LIST, Buffer.from(JSON.stringify(versions)), ossOpts);
//   client.put(VERSION_LATEST, Buffer.from(JSON.stringify(latest)), ossOpts);
// };
