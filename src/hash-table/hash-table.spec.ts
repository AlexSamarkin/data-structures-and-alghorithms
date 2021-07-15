import {HashTable} from "./hash-table";

describe("Hash Table", () => {
   it("should create HT", () => {
      const hashTable = new HashTable<string>(10);

      expect(hashTable.get('notExist')).toBeUndefined();

      hashTable.set('exist', 'value');

      expect(hashTable.get('exist')).toBe('value');

       hashTable.set('eXist', 'value2');

       expect(hashTable.get('eXist')).toBe('value2');
   });

    it('should delete item from hash tabke', () => {
        const hashTable = new HashTable<string>(10);

        hashTable.set('exist', 'value');

        expect(hashTable.get('exist')).toBe('value');

        hashTable.delete('exist');

        expect(hashTable.get('exist')).toBeUndefined();
    });
});