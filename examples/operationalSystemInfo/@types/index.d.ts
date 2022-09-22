declare module 'os' {
  export function endianness(): string;

  export function hostname(): string;

  export function loadavg(): any[];

  export function uptime(): number;

  export function freemem(): number;

  export function totalmem(): number;

  export function cpus(): any[];

  export function type(): string;

  export function release(): string;

  export function networkInterfaces(): object;

  export function arch(): string;

  export function tmpDir(): string;

  export function homedir(): string;

  export function platform(): string;
}
