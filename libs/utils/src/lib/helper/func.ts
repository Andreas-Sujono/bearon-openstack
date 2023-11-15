export const callAsyncWithDefault = async <T>(
  asyncTask: () => Promise<T>,
  defaultValue: T
) => {
  try {
    const value = await asyncTask();
    return value;
  } catch (err) {
    return defaultValue;
  }
};

export const divideIntoBatches = <T>(data: T[], maxSizeIn1Batch = 25) => {
  const batches: T[][] = [];
  for (let i = 0; i < Math.ceil(data.length / maxSizeIn1Batch); i++) {
    const start = i * maxSizeIn1Batch;
    const end = start + maxSizeIn1Batch;
    batches.push(data.slice(start, end));
  }
  const filteredBatches = batches.filter((batch) => batch.length > 0);

  return filteredBatches;
};
