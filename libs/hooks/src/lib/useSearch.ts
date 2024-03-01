import { useState, useRef, useEffect } from 'react';

const useSearch = <T>({
  data,
  criteriaKeys,
  onSearchServer,
  initialSearch,
}: {
  data: T[];
  criteriaKeys?: (keyof T)[];
  onSearchServer?: (val: string) => Promise<T[]>;
  initialSearch?: string;
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchRes, setSearchRes] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchedData = searchInput ? searchRes : data;

  useEffect(() => {
    if (initialSearch) {
      onSearch(initialSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSearch]);

  const onSearch = (val: string) => {
    setSearchInput(val);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    debounceRef.current = setTimeout(async () => {
      let filteredRes = [] as T[];
      if (onSearchServer) {
        setIsLoading(true);
        try {
          filteredRes = await onSearchServer(val);
        } catch (err) {
          //error filter from server
          filteredRes = [];
        }
      } else {
        filteredRes = data.filter((item) =>
          criteriaKeys?.some((key) =>
            item[key]?.toString()?.toLowerCase()?.includes(val?.toLowerCase())
          )
        );
      }
      setIsLoading(false);
      setSearchRes(filteredRes);
    }, 150);
  };

  return { searchInput, onSearch, searchedData, isLoading };
};

export { useSearch };
