import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'google-business.json');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export interface CacheData {
  data: any;
  timestamp: number;
}

export function getCachedData(): CacheData | null {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const content = fs.readFileSync(CACHE_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }
  return null;
}

export function setCachedData(data: any): void {
  try {
    const cacheData: CacheData = {
      data,
      timestamp: Date.now(),
    };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2));
  } catch (error) {
    console.error('Error writing cache:', error);
  }
}

export function isCacheValid(cacheData: CacheData | null, maxAge: number): boolean {
  if (!cacheData) return false;
  const age = Date.now() - cacheData.timestamp;
  return age < maxAge;
}
