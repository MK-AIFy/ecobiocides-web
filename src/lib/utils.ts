type ClassValue = string | undefined | null | false | Record<string, boolean> | ClassValue[];

function clsx(...args: ClassValue[]): string {
  const classes: string[] = [];
  for (const arg of args.flat()) {
    if (!arg) continue;
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "object" && arg !== null) {
      for (const [key, value] of Object.entries(arg as Record<string, boolean>)) {
        if (value) classes.push(key);
      }
    }
  }
  return classes.join(" ");
}

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}
