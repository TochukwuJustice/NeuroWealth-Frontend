/**
 * Centralized storage key registry
 * All localStorage keys must be defined here to ensure consistency and prevent duplication.
 * Keys mirror existing app behavior and may use either `nw_` or legacy hyphenated names.
 */

export const STORAGE_KEYS = {
  // Cookie consent
  COOKIE_CONSENT: "nw_cookie_consent",

  // Theme mode
  THEME: "nw-theme",

  // Dashboard settings
  PREFERENCES: "nw_preferences",
  NOTIFICATIONS: "nw_notifications",
  SECURITY: "nw_security",
  NOTIFICATION_PREFERENCES: "nw-notification-preferences",

  // User profile
  PROFILE: "nw_profile",

  // Strategy selection
  STRATEGY_PREFERENCE: "nw_strategy_preference",

  // Sandbox state
  SANDBOX_SCENARIOS: "sandbox-scenarios",

  // Onboarding flow
  ONBOARDING_STATE: "onboarding-state",
  ONBOARDING_USER_STRATEGY: "user-strategy",
  ONBOARDING_FIRST_DEPOSIT: "first-deposit",
} as const;

/**
 * Type-safe storage key getter
 * Usage: getStorageKey('COOKIE_CONSENT')
 */
export function getStorageKey(key: keyof typeof STORAGE_KEYS): string {
  return STORAGE_KEYS[key];
}
