const storage = { store: null, config: {} }

export default storage

export const setStore = (store, config = {cleanup: true}) => {
  storage.store = store
  storage.config = config
}
