# Backend Endpoints for /admin/events

## 1. GET /analytics/summary?range=7d

```ts
{
  totalPageViews: number
  totalPageViewsChange: string   // "+12.4%"
  uniqueVisitors: number
  uniqueVisitorsChange: string   // "+8.2%"
}
```

## 2. GET /analytics/timeseries?range=7d

```ts
{
  points: Array<{
    label: string    // "Mon", "Jun 15", "14:00"
    views: number
    unique: number
  }>
}
```

## 3. GET /analytics/top-pages?range=7d&limit=6

```ts
{
  pages: Array<{
    path: string
    views: number
    unique: number
  }>
}
```

## 7. GET /analytics/events/export?range=7d&type=all&search=

Returns CSV file download.

## 4. GET /analytics/referrers?range=7d

```ts
{
  referrers: Array<{
    name: string     // "Google (Organic)"
    count: number
    percent: number
  }>
}
```

## 5. GET /analytics/devices?range=7d

```ts
{
  devices: Array<{
    type: string    // "Desktop" | "Mobile" | "Tablet"
    count: number
    percent: number
  }>
}
```

## 6. GET /analytics/events?page=1&limit=5&type=all&search=&range=7d

```ts
{
  events: Array<{
    id: string
    timestamp: string
    event: "page_view" | "click" | "form_submit" | "error"
    path: string
    ip: string
    country: string
    browser: string
    os: string
    metadata: Record<string, unknown>
  }>
  totalCount: number
  page: number
  limit: number
  totalPages: number
}
```
