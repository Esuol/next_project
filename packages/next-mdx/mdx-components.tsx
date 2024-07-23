import Image from 'next/image';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 自定义样式
    h1: ({ children }) => <h1 style={{ fontSize: '30px' }}>{children}</h1>,
    img: (props) => (
      // @ts-ignore
      <Image
        sizes="400"
        style={{ width: '400px', height: '400px' }}
        {...props}
      />
    ),
    ...components,
  };
}
