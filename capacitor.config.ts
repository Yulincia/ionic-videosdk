import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-videosdk',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: 'url.com', //url that should be whitelisted
    androidScheme: 'https',
    iosScheme: 'https' // ios doesn't http nor https, it uses capacitor as a default
  }
};

export default config;
