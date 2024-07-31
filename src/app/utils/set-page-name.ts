import { environment } from "../../environments/environment";

export const setPageName = (name: string): string => {
  return `${name} | ${environment.appName}`;
};
