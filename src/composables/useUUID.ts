import { v4 as uuidv4 } from 'uuid';

export function useUUID() {
  return {
    uniqueId: uuidv4(),
    generateUUID: uuidv4
  }
}