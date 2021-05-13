// global variable that holds the package's config
const config = {}

/**
 * set the package configurations
 * @param  {object} conf configuration onject
 * @return {array}      config keys
 */
export const setConfig = (conf = { cleanup: true }) =>
  Object.keys(conf).map((key) => (config[key] = conf[key]))

export default config
