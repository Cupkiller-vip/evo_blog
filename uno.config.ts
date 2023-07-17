import { defineConfig, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetIcons()],
});
