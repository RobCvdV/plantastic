'use client';
import { FC, useCallback, useState } from "react";

export type Item = {
  id: string;
  icon?: string;
  name?: string;
};

type ListItemProps = {
  className?: string;
  item: Item;
  toAdd?: Item;
  onAddAfterItem?: (item: Item) => void;
};

const ListItem: FC<ListItemProps> = ({item, toAdd, onAddAfterItem, className}) => {
  const [isOver, setIsOver] = useState(false);
  return <li
    key={item.id}>
    <button
      className="flex flex-col items-start"
      onPointerOver={() => setIsOver(true)}
      onPointerOut={() => setIsOver(false)}
      onClick={() => onAddAfterItem?.(item)}
    >
      <div className={`
        flex flex-row items-center justify-start
        ${className}`}
      >
        <span className="mr-2">{item.icon}</span>
        <span>{item.name}</span>
      </div>
      <div
        className={`text-blue-800 bg-blue-100
          flex flex-row items-center justify-start
          rounded-xl overflow-hidden 
          transition-all duration-500 
          ${isOver ? "opacity-100 h-10 p-2" : "opacity-0 h-0 p-0"}`}
      >
        <span className="mr-4">➕</span>
        <span className="mr-2">{toAdd?.icon}</span>
        <span>{toAdd?.name}</span>
      </div>
    </button>
  </li>;
}

type ListProps = {
  header?: string;
  items: Item[];
  itemToAdd?: Item;
  onAdd?: (item: Item, index: number) => void;
};

export const List: FC<ListProps> = ({header, items, itemToAdd, onAdd}) => {
  const onAddAfterItem = useCallback((afterItem: Item) => {
    if (!itemToAdd || !onAdd) return;
    const index = items.indexOf(afterItem);
    onAdd(itemToAdd, index + 1);
  }, [items, itemToAdd, onAdd]);
  return (
    <ol
      className="list-none text-2xl text-left sm:text-left font-[family-name:var(--font-geist-mono)]"
    >
      <ListItem
        className={"text-3xl font-bold"}
        key={"header"}
        item={{id: "header", name: header}}
        toAdd={itemToAdd}
        onAddAfterItem={onAddAfterItem}
      />
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          toAdd={itemToAdd}
          onAddAfterItem={onAddAfterItem}
        />
      ))}
    </ol>
  );
};
