export * from './func';
export * from './image';
export * from './query';
// export * from './transform';

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const clamp = (number: number, boundOne: number, boundTwo: number) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};

export const generateId = () => {
  return Math.floor(Math.random() * 1000000000);
};

export const getRandomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanObject = (obj: Record<string, any>) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
};
