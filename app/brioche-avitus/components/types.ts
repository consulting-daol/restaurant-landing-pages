export interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  image?: string;
  items: MenuItem[];
  sauces?: string;
}

export interface InstafeedOptions {
  accessToken?: string;
  target: HTMLElement | string;
  get: string;
  userId?: string;
  limit?: number;
  resolution?: string;
  template?: string;
  error?: (error: any) => void;
}

export interface InstafeedInstance {
  run: () => void;
}

declare global {
  interface Window {
    Instafeed: new (options: InstafeedOptions) => InstafeedInstance;
  }
}
