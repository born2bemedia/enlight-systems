/**
 * @typedef {"safe" | "warning" | "danger" | "unknown"} ReputationStatus
 */

/**
 * @typedef {Object} ReputationSource
 * @property {string} name
 * @property {ReputationStatus} status
 * @property {string} message
 * @property {unknown} [details]
 */

/**
 * @typedef {Object} DomainReputationReport
 * @property {string} domain
 * @property {string} normalizedUrl
 * @property {number} score
 * @property {string} summary
 * @property {ReputationSource[]} sources
 */

export {};
