const storage = { store: null }

export default storage.store

export const setStore = (store) => (storage.store = store)
