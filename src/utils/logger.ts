type LogLevel = "verbose" | "info" | "warn" | "normal";

const currentLevel: LogLevel =
  (import.meta.env.PUBLIC_LOG_LEVEL as LogLevel) || "info";

const LEVEL_RANK: Record<LogLevel, number> = {
  verbose: 0,
  info: 1,
  warn: 2,
  normal: 3,
};

function shouldLog(level: LogLevel): boolean {
  return LEVEL_RANK[level] >= LEVEL_RANK[currentLevel];
}

const prefix = (level: string) => `[LoginForm:${level.toUpperCase()}]`;

export const logger = {
  verbose: (...args: unknown[]) => {
    if (shouldLog("verbose")) console.debug(prefix("verbose"), ...args);
  },
  info: (...args: unknown[]) => {
    if (shouldLog("info")) console.info(prefix("info"), ...args);
  },
  warn: (...args: unknown[]) => {
    if (shouldLog("warn")) console.warn(prefix("warn"), ...args);
  },
  normal: (...args: unknown[]) => {
    if (shouldLog("normal")) console.log(prefix("normal"), ...args);
  },
};
