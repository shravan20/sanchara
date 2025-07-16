import axios from 'axios';

// NocoDB Configuration - using import.meta.env for Vite
const NOCODB_CONFIG = {
  baseURL: import.meta.env.VITE_NOCODB_BASE_URL || 'https://wixyal7w.nocodb.com',
  apiToken: import.meta.env.VITE_NOCODB_API_TOKEN || '',
  projectId: import.meta.env.VITE_NOCODB_PROJECT_ID || 'pl83vhf500pt4wh',
  tableId: import.meta.env.VITE_NOCODB_TABLE_ID || 'mm496evpoh5n9o7',
};

// Create axios instance with default config
const nocodbApi = axios.create({
  baseURL: NOCODB_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json, text/plain, */*',
    'xc-token': NOCODB_CONFIG.apiToken,
    'xc-gui': 'true',
  },
});

// Helper function to check if NocoDB is configured
const isNocoDBConfigured = () => {
  return !!(NOCODB_CONFIG.apiToken && NOCODB_CONFIG.projectId && NOCODB_CONFIG.tableId);
};

export interface WaitingListEntry {
  name: string;
  email: string;
  role: string; // Changed to string to support comma-separated values like "user,contributor"
  created_at?: string;
}

export interface NocoDBResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
}

class NocoDBService {
  /**
   * Submit waiting list entry to NocoDB
   */
  async submitWaitingListEntry(entry: WaitingListEntry): Promise<NocoDBResponse> {
    try {
      // Check if NocoDB is configured
      if (!isNocoDBConfigured()) {
        return {
          data: null,
          success: false,
          message: 'NocoDB is not configured. Please check your environment variables.',
        };
      }

      // Prepare the data according to your actual NocoDB API format
      const entryData = {
        Title: entry.name, // Using Title as per your curl example
        name: entry.name,
        email: entry.email,
        role: entry.role,
      };

      const response = await nocodbApi.post(
        `/api/v1/db/data/noco/${NOCODB_CONFIG.projectId}/${NOCODB_CONFIG.tableId}`,
        entryData
      );

      return {
        data: response.data,
        success: true,
        message: 'Successfully added to waiting list!',
      };
    } catch (error: any) {
      console.error('NocoDB submission error:', error);
      
      return {
        data: null,
        success: false,
        message: error.response?.data?.message || 'Failed to submit to waiting list. Please try again.',
      };
    }
  }

  /**
   * Get all waiting list entries (for admin use)
   */
  async getWaitingListEntries(): Promise<NocoDBResponse<WaitingListEntry[]>> {
    try {
      if (!isNocoDBConfigured()) {
        return {
          data: [],
          success: false,
          message: 'NocoDB is not configured.',
        };
      }

      const response = await nocodbApi.get(
        `/api/v1/db/data/noco/${NOCODB_CONFIG.projectId}/${NOCODB_CONFIG.tableId}`
      );

      return {
        data: response.data.list || response.data || [],
        success: true,
      };
    } catch (error: any) {
      console.error('NocoDB fetch error:', error);
      
      return {
        data: [],
        success: false,
        message: error.response?.data?.message || 'Failed to fetch waiting list entries.',
      };
    }
  }

  /**
   * Check if email already exists in waiting list
   */
  async checkEmailExists(email: string): Promise<boolean> {
    try {
      // If NocoDB is not configured, return false (no duplicates)
      if (!isNocoDBConfigured()) {
        return false;
      }

      const response = await nocodbApi.get(
        `/api/v1/db/data/noco/${NOCODB_CONFIG.projectId}/${NOCODB_CONFIG.tableId}`,
        {
          params: {
            where: `(email,eq,${email})`,
            limit: 1,
          },
        }
      );

      const data = response.data.list || response.data || [];
      return data.length > 0;
    } catch (error) {
      console.error('Email check error:', error);
      return false;
    }
  }

  /**
   * Get waiting list statistics
   */
  async getWaitingListStats(): Promise<NocoDBResponse<{ total: number; users: number; contributors: number }>> {
    try {
      if (!isNocoDBConfigured()) {
        return {
          data: { total: 0, users: 0, contributors: 0 },
          success: false,
          message: 'NocoDB is not configured.',
        };
      }

      const response = await nocodbApi.get(
        `/api/v1/db/data/noco/${NOCODB_CONFIG.projectId}/${NOCODB_CONFIG.tableId}`
      );

      const entries = response.data.list || response.data || [];
      const stats = {
        total: entries.length,
        users: entries.filter((entry: WaitingListEntry) => entry.role.includes('user')).length,
        contributors: entries.filter((entry: WaitingListEntry) => entry.role.includes('contributor')).length,
      };

      return {
        data: stats,
        success: true,
      };
    } catch (error: any) {
      console.error('Stats fetch error:', error);
      
      return {
        data: { total: 0, users: 0, contributors: 0 },
        success: false,
        message: error.response?.data?.message || 'Failed to fetch statistics.',
      };
    }
  }
}

export const nocodbService = new NocoDBService();
export default nocodbService;
