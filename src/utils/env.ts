import { config } from 'dotenv';
import { resolve } from 'path';
const envFile = process.env.NODE_ENV === "development" 
? ".dev.env" 
: ".env";
const envFilePath = resolve(process.cwd(), envFile);

config({ path: envFilePath });

export function getEnvVar(name: string, fallback?: string): any {
    const value = process.env[name] ?? fallback;
    if(value === undefined){
        throw new Error(`no env variable with name ${name} on ${resolve(process.cwd(), envFile)}.`)
    }

    return value;
}