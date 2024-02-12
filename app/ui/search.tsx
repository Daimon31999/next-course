'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');

      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    // delay in ms
    300,
  );

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchParams.get('query')?.toString()}
        className="peer block w-full rounded-md border border-slate-200 py-[9px] pl-10 text-sm text-slate-700 outline-none placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 peer-focus:text-slate-700" />
    </div>
  );
}
