import { getEnvVar } from "./utils/env.js";

export const Keys = {
    clientToken: getEnvVar('CLIENT_TOKEN')
} as const;

export default Keys;