# Backend API

## Project

### `PATCH /project/details`
Updates a project's core fields. Auth required (admin/manager).

**Request body:**
```json
{
  "slug": "project-slug",       // required - project slug
  "projectname": "New Name",    // optional - min 3, max 40
  "projectcategory": "Video",   // optional - "Video" | "Industry" | "Animation"
  "description": "...",         // optional - min 10, max 500
  "timeline": "6 Months",       // optional - max 100
  "type": "One-Time"            // optional - max 100
}
```
