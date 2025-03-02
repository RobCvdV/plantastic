'use client';
import Image from "next/image";
import { Item, List } from "@components/List";
import { v4 as randomUUID } from "uuid";
import { useCallback, useState } from "react";

const mockItems = [
  {id: randomUUID(), name: "Ontbijten", icon: "🍳"},
  {id: randomUUID(), name: "Tanden poetsen", icon: "🪥"},
  {id: randomUUID(), name: "Fietsen naar werk", icon: "🚲"},
  {id: randomUUID(), name: "4 uur Werken", icon: "💻"},
  {id: randomUUID(), name: "Lunchen", icon: "🥪"},
  {id: randomUUID(), name: "Fietsen naar huis", icon: "🚲"},
  {id: randomUUID(), name: "Avondeten", icon: "🍲"},
  {id: randomUUID(), name: "Netflixen", icon: "📺"},
  {id: randomUUID(), name: "Slapen", icon: "😴"},
] as Item[];

export default function Home() {
  const [items, setItems] = useState(mockItems.slice(0, 3));
  const insertItemAtIndex = useCallback((item: Item, i: number) => {
    const newItem = {...item, id: randomUUID()};
    setItems((_items) => [..._items.slice(0, i), newItem, ..._items.slice(i)]);
  }, [setItems]);

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
        {/*<Image*/}
        {/*  className="dark:invert"*/}
        {/*  src="/next.svg"*/}
        {/*  alt="Next.js logo"*/}
        {/*  width={180}*/}
        {/*  height={38}*/}
        {/*  priority*/}
        {/*/>*/}
        {/*<ol*/}
        {/*  className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">*/}
        {/*  <li className="mb-2">*/}
        {/*    Get started by editing{" "}*/}
        {/*    <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">*/}
        {/*      src/app/page.tsx*/}
        {/*    </code>*/}
        {/*    .*/}
        {/*  </li>*/}
        {/*  <li>Save and see your changes instantly.</li>*/}
        {/*</ol>*/}
        <List
          header="To Do"
          itemToAdd={mockItems[Math.floor(Math.random() * mockItems.length)]}
          items={items}
          onAdd={insertItemAtIndex}
        />

        {/*<div className="flex gap-4 items-center flex-col sm:flex-row">*/}
        {/*  <a*/}
        {/*    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className="dark:invert"*/}
        {/*      src="/vercel.svg"*/}
        {/*      alt="Vercel logomark"*/}
        {/*      width={20}*/}
        {/*      height={20}*/}
        {/*    />*/}
        {/*    Deploy now*/}
        {/*  </a>*/}
        {/*  <a*/}
        {/*    className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"*/}
        {/*    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*    target="_blank"*/}
        {/*    rel="noopener noreferrer"*/}
        {/*  >*/}
        {/*    Read our docs*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span>Footer</span><span>here</span>
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    aria-hidden*/}
        {/*    src="/file.svg"*/}
        {/*    alt="File icon"*/}
        {/*    width={16}*/}
        {/*    height={16}*/}
        {/*  />*/}
        {/*  Learn*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    aria-hidden*/}
        {/*    src="/window.svg"*/}
        {/*    alt="Window icon"*/}
        {/*    width={16}*/}
        {/*    height={16}*/}
        {/*  />*/}
        {/*  Examples*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  className="flex items-center gap-2 hover:underline hover:underline-offset-4"*/}
        {/*  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  <Image*/}
        {/*    aria-hidden*/}
        {/*    src="/globe.svg"*/}
        {/*    alt="Globe icon"*/}
        {/*    width={16}*/}
        {/*    height={16}*/}
        {/*  />*/}
        {/*  Go to nextjs.org →*/}
        {/*</a>*/}
      </footer>
    </div>
  );
}
