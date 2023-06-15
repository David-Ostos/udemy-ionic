import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.counter.app',
  appName: 'Counter',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
