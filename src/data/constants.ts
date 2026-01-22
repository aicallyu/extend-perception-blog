// Shared mapping from category name to translation key
export const categoryKeyMap: Record<
  string,
  'perceptionReality' | 'blindSpots' | 'decisionErrors' | 'communicationMismatch' | 'powerSystems' | 'aiPerceptionLayer'
> = {
  'Perception vs. Reality': 'perceptionReality',
  'Blind Spots': 'blindSpots',
  'Decision Errors': 'decisionErrors',
  'Communication Mismatch': 'communicationMismatch',
  'Power & Systems': 'powerSystems',
  'AI as Perception Layer': 'aiPerceptionLayer',
}

export type CategoryKey = typeof categoryKeyMap[keyof typeof categoryKeyMap]
