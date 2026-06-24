import { httpService } from "@/utils/httpService.ts";

export type AnalyticsEventType = "page_view" | "click" | "form_submit" | "error";

export type AnalyticsTimeRange = "24h" | "7d" | "30d";

export type AnalyticsTimeseriesPoint = {
  label: string;
  views: number;
  unique: number;
};

export type AnalyticsTopPage = {
  path: string;
  views: number;
  unique: number;
};

export type AnalyticsReferrer = {
  name: string;
  count: number;
  percent: number;
};

export type AnalyticsDevice = {
  type: string;
  count: number;
  percent: number;
};

export type AnalyticsEvent = {
  id: string;
  timestamp: string;
  event: AnalyticsEventType;
  path: string;
  ip: string;
  country: string;
  browser: string;
  os: string;
  metadata: Record<string, unknown>;
};

export type SummaryResponse = {
  totalPageViews: number;
  totalPageViewsChange: string;
  uniqueVisitors: number;
  uniqueVisitorsChange: string;
};

export type TimeseriesResponse = {
  points: AnalyticsTimeseriesPoint[];
};

export type TopPagesResponse = {
  pages: AnalyticsTopPage[];
};

export type ReferrersResponse = {
  referrers: AnalyticsReferrer[];
};

export type DevicesResponse = {
  devices: AnalyticsDevice[];
};

export type EventsResponse = {
  events: AnalyticsEvent[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type GetEventsParams = {
  page?: number;
  limit?: number;
  type?: string;
  search?: string;
  range?: AnalyticsTimeRange;
};

export const analyticsService = {
  getSummary(range: AnalyticsTimeRange = "7d"): Promise<SummaryResponse> {
    return httpService.get<SummaryResponse>(`/analytics/summary?range=${range}`);
  },

  getTimeseries(range: AnalyticsTimeRange = "7d"): Promise<TimeseriesResponse> {
    return httpService.get<TimeseriesResponse>(`/analytics/timeseries?range=${range}`);
  },

  getTopPages(range: AnalyticsTimeRange = "7d", limit: number = 6): Promise<TopPagesResponse> {
    return httpService.get<TopPagesResponse>(`/analytics/top-pages?range=${range}&limit=${limit}`);
  },

  getReferrers(range: AnalyticsTimeRange = "7d"): Promise<ReferrersResponse> {
    return httpService.get<ReferrersResponse>(`/analytics/referrers?range=${range}`);
  },

  getDevices(range: AnalyticsTimeRange = "7d"): Promise<DevicesResponse> {
    return httpService.get<DevicesResponse>(`/analytics/devices?range=${range}`);
  },

  getEvents(params: GetEventsParams = {}): Promise<EventsResponse> {
    const { page = 1, limit = 5, type = "all", search = "", range = "7d" } = params;
    return httpService.get<EventsResponse>(
      `/analytics/events?page=${page}&limit=${limit}&type=${type}&search=${encodeURIComponent(search)}&range=${range}`
    );
  },

  async exportCsv(params: GetEventsParams = {}): Promise<Blob> {
    const { type = "all", search = "", range = "7d" } = params;
    return httpService.get<Blob>(`/analytics/events/export?type=${type}&search=${encodeURIComponent(search)}&range=${range}`, {
      responseType: "blob",
    });
  },
};
