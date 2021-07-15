import crc32 from 'crc-32';
import {LinkedList} from "../linked-list/linked-list";
import LinkedListNode from "../linked-list/linked-list-node";

interface ListItem<T> {
    hash: number;
    value: T
}

export class HashTable<T> {
    private readonly MAX_SIZE: number = 100;
    private readonly items: (LinkedList<ListItem<T>> | null)[];

    constructor(maxSize?: number) {
        if (maxSize) {
            this.MAX_SIZE = maxSize;
        }
        this.items = new Array(this.MAX_SIZE).fill(null)
    }

    public set(key: string, value: T): void {
        const index = this.getIndex(key);
        if (!this.items[index]) {
            this.items[index] = new LinkedList<ListItem<T>>(
                new LinkedListNode<ListItem<T>>({
                    hash: HashTable.hash(key),
                    value: value
                })
            );
        } else {
            this.items[index]?.add({
                value,
                hash: HashTable.hash(key)
            });
        }
    }

    public get(key: string): T | undefined {
        const index = this.getIndex(key);
        if (!this.items[index]) {
            return void 0;
        }

        const hash = HashTable.hash(key);
        const item = this.items[index]?.find((node: LinkedListNode<ListItem<T>>) => {
            return node.value.hash === hash;
        });

        if (!item) {
            return void 0;
        }

        return item.value.value;
    }

    public delete(key: string): void {
        const index = this.getIndex(key);
        if (!this.items[index]) {
            return void 0;
        }

        const hash = HashTable.hash(key);

        this.items[index]?.deleteBy((node: LinkedListNode<ListItem<T>>) => {
           return node.value.hash === hash;
        });
    }

    private static hash(key: string): number {
        return crc32.str(key);
    }

    private getIndex(key: string): number {
        return Math.abs(HashTable.hash(key) % this.MAX_SIZE);
    }

    public toArray(): (LinkedList<ListItem<T>> | null)[] {
        return this.items;
    }
}