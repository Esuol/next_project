// import { S3Client, GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
// import path, { resolve, join } from 'path'
// import fs from 'fs-extra'
// import { LatestData } from '../types'
// // const test = ['InTo9hiIUpOSam89z6L6', 'tNHYetSsS1EwUN2y66L1yZdCkwmi9b3Z3U1LswVy', 'trantor-local', 'http://127.0.0.1:9000', 'us-east-1']

// const LOCAL_PREFIX = 'fe-resources'

// export default async (options: any) => {
//   const { dist = '.', prefix, config } = options
//   const [ak, sk, bucket, endpoint, region = 'us-east-1'] = config

//   const PWD_DIR = resolve(process.cwd(), dist)
//   const PWD_FE_DIR = join(PWD_DIR, LOCAL_PREFIX)
//   const LATEST_NAME = join(prefix, 'latest.json')

//   const client = new S3Client({
//     credentials: {
//       accessKeyId: ak,
//       secretAccessKey: sk,
//     },
//     endpoint,
//     region,
//   })

//   // 获取最后版本内容
//   const latest: { [index: string]: LatestData } = JSON.parse(
//     (await await (
//       await client.send(
//         new GetObjectCommand({
//           Bucket: bucket,
//           Key: LATEST_NAME,
//         }),
//       )
//     ).Body?.transformToString()) || '{}',
//   )

//   const latestAlter = Object.entries(latest).reduce((prev, [key, value]) => {
//     prev[key] = {
//       ...value,
//       prefix: LOCAL_PREFIX as string,
//     } as LatestData
//     return prev
//   }, {} as { [index: string]: LatestData })

//   // 把 latest 保存到本地
//   fs.ensureDirSync(PWD_FE_DIR)
//   fs.writeJSONSync(join(PWD_FE_DIR, 'latest.json'), latestAlter)

//   // 循环拉取所有内容到本地
//   Object.values(latest).map(async value => {
//     const { namespace, endpointType, prefix, dirname } = value
//     const { Contents = [] } = await client.send(
//       new ListObjectsCommand({
//         Bucket: bucket,
//         Prefix: join(prefix, dirname),
//       }),
//     )
//     Contents.map(async ({ Key }) => {
//       const { Body } = await client.send(
//         new GetObjectCommand({
//           Bucket: bucket,
//           Key,
//         }),
//       )
//       Body.transformToByteArray().then(content => {
//         const filename = Key.replace(prefix, '')
//         fs.ensureDirSync(path.dirname(join(PWD_FE_DIR, filename)))
//         fs.writeFileSync(join(PWD_FE_DIR, filename), content)
//       })
//     })
//   })
// }
