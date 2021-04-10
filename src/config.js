const config = {}

export const setConfig = (conf = { cleanup: true }) =>
  Object.keys(conf).map((key) => {
    config[key] = conf[key]
  })

export default config
