const storeKey = "__reactLiteCacheDemoStore";

function getStore() {
  if (!globalThis[storeKey]) {
    globalThis[storeKey] = {
      updatedAt: new Date().toISOString(),
      value: 1,
    };
  }

  return globalThis[storeKey];
}

export async function readSourceRecord() {
  return { ...getStore() };
}

export async function incrementSourceRecord() {
  const store = getStore();
  store.value += 1;
  store.updatedAt = new Date().toISOString();
  return { ...store };
}

export async function resetSourceRecord() {
  const store = getStore();
  store.value = 1;
  store.updatedAt = new Date().toISOString();
}
