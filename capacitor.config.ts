import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'sumativa5',
  webDir: 'www',
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample", // Icono de la app solo para Android
      iconColor: "#488AFF", // Color de Icono
      sound: "beep.wav", // Sonido de la notificación solo para Android
    }
  }
};

export default config;
