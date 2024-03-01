import { useState, useRef } from 'react';

const useSort = <T>({
  data,
  onSortServer,
}: {
  data: T[];
  onSortServer?: (sortKey: string, sortDirection: string) => Promise<T[]>;
  initialSortKey?: string;
  initialSortDirection?: 'asc' | 'desc' | (string & Record<never, never>);
}) => {
  const [sortKey, setSortKey] = useState('');
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [sortedRes, setSortedRes] = useState<T[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const sortedData = sortKey ? sortedRes : data;

  const onSort = (sortKey: string, sortDirection: string) => {
    setSortKey(sortKey);
    setSortDirection(sortDirection);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    debounceRef.current = setTimeout(async () => {
      let _sortedRes = [] as T[];
      if (onSortServer) {
        setIsLoading(true);
        try {
          _sortedRes = await onSortServer(sortKey, sortDirection);
        } catch (err) {
          //error sort from server
          _sortedRes = [];
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _sortedRes = data.concat().sort((a: any, b: any) => {
          if (sortDirection === 'asc') {
            if (typeof a[sortKey] === 'string')
              return a[sortKey].localeCompare(b[sortKey]);
            return a[sortKey] - b[sortKey];
          }

          if (typeof a[sortKey] === 'string')
            return b[sortKey].localeCompare(a[sortKey]);
          return b[sortKey] - a[sortKey];
        });
        // console.log('sortKey: ', sortKey, sortDirection, _sortedRes);
      }
      setIsLoading(false);
      setSortedRes(_sortedRes);
    }, 150);
  };

  return { sortedData, onSort, sortKey, sortDirection, isLoading };
};

export { useSort };
