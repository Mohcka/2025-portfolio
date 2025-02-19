import type { NextConfig } from "next";
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";



const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"]
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrettyCode],
  },
});

export default withMDX(nextConfig);
