const storage = { store: null }

export default storage

export const setStore = (store) => (storage.store = store)
