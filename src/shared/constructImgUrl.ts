import config from "../config";

export const constructPublicUrl = (key: string): string => {
  return `${config.r2.publicDomain}/${key}`;
};