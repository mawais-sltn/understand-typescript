import { formatISO, parseJSON } from 'date-fns';

export function extractDate(date: string | number | Date): string {
  return formatISO(parseJSON(date), { representation: 'date' });
}

export function defined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function enumFromName<T extends {}>(value: string, enumType: T, caseSensitive = true): T[keyof T] {
  if (value) {
    for (const property in enumType) {
      const enumMember = enumType[property];
      if (typeof enumMember === 'string') {
        const equal = caseSensitive ? enumMember === value : enumMember.toLowerCase() === value.toLocaleLowerCase();
        if (equal) {
          return enumType[property];
        }
      }
    }
  }

  throw new Error(`Invalid value '${value}', valid enum values are ${Object.keys(enumType).join('|')}`);
}
