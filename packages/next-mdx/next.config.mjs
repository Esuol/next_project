// next.config.mjs
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkMdxImages from "remark-mdx-images";
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // 添加 markdown 插件
  options: {
    remarkPlugins: [remarkGfm, remarkMdxImages, [remarkFrontmatter],
      [remarkMdxFrontmatter]],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)