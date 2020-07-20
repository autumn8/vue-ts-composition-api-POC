import { provide, inject } from "@vue/composition-api";

interface ConfigInterface {
  key: string;
}

const createOktaAuth = (config: ConfigInterface) => {
  return {
    key: config.key
  };
};

const oktaAuthSymbol = Symbol();

export function provideOktaAuth(config: ConfigInterface) {
  const oktaAuth = createOktaAuth(config);
  provide(oktaAuthSymbol, oktaAuth);
}

export function useOktaAuth() {
  const oktaAuth = inject(oktaAuthSymbol);
  if (!oktaAuth) throw new Error("No oktaAuth provided!!!");

  return oktaAuth;
}