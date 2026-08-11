export const ACCOUNT_TYPES = ['exoneree', 'volunteer', 'support_advisor'] as const
export type AccountType = (typeof ACCOUNT_TYPES)[number]
