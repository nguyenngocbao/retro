/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? `${process.env.NEXT_PUBLIC_ROOT_PATH}/`
      : undefined
};

module.exports = nextConfig;
