export function assertExists(env: string | undefined) {
    if (!env) {
      throw new Error(`Environment variable does not exist`)
    }
    return env
  }