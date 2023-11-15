export const getFromSearchParams = (
  obj: URLSearchParams | string | Record<string, string>,
  key: string
) => {
  const searchParams = new URLSearchParams(obj);
  let value = searchParams.get(key) || '';
  if (value?.at(-1) === '?') {
    value = value.slice(0, value.length - 1);
  }
  return value;
};

export function objToQueryString(
  obj: Record<string, string | number | boolean>
) {
  const res =
    '?' + new URLSearchParams(obj as Record<string, string>).toString();
  return res;
}
