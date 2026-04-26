import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Hide the dev indicator when HIDE_DEV_INDICATORS=1 (used by visual regression
  // tests so the floating icon doesn't appear in screenshots).
  devIndicators:
    process.env.HIDE_DEV_INDICATORS === '1'
      ? false
      : { position: 'bottom-left' },
};

export default nextConfig;
