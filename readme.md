
# Menu Management & Stuff Management API

This API serves as the backend for a menu management system and "Stuff" management operations. It provides features like creating, reading, updating, and deleting menu items while also enabling efficient management of "Stuff" records with role-based access control.

---

## Features

### Menu Management

- CRUD operations for menu items.
- Input validation with Zod schema.
- Structured and consistent responses.

### Stuff Management

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

### Post Management

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

---

## Table of Contents

1. [Menu Management](#menu-management)
   - [Create Menu](#create-menu)
   - [Get All Menus](#get-all-menus)
   - [Get Single Menu](#get-single-menu)
   - [Update Menu](#update-menu)
   - [Delete Menu](#delete-menu)

2. [Stuff Management](#stuff-management)
   - [Create Stuff](#create-stuff)
   - [Get All Stuff](#get-all-stuff)
   - [Get Single Stuff](#get-single-stuff)
   - [Update Stuff](#update-stuff)
   - [Delete Stuff](#delete-stuff)

3. [Post Management](#post-management)
   - [Create Post](#create-post)
   - [Get All Post](#get-all-post)
   - [Get Single Post](#get-single-post)
   - [Update Post](#update-post)
   - [Delete Post](#delete-post)
---

## Menu Management

### Create Menu/Navigation

**Description:** Create a new menu item.

**POST (Body Data):** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/create]

```json
{
  
}
```

### Output Sample:

```json
{
  
}
```

**GET:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu]

**Description:** Get menu items.

### Output Sample:

```json
[
  {
    
  }
  
]
```

**GET/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Get menu item.

### Output Sample:

```json
{
  
}
```
**PATCH/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Update menu item.

### Output Sample:

```json
{
  
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Delete menu item.

### Output Sample:

```json
{
  
}
```

---

## Stuff Management

### Create Stuff (admin/content-writer)

**Description:** Create a new Stuff (role should be, "admin/content-writer).

**POST (Body Data):** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/create]

```json
{
  
}
```

### Output Sample:

```json
{
 
}
```

**GET:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff]

**Description:** Get all Stuff.

### Output Sample:

```json
[
  {
    
  }
  
]
```

**GET/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Get a Stuff.

### Output Sample:

```json
{
  
}
```
**PATCH/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Update profile info it self.

### Output Sample:

```json
{
  
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Delete a Stuff.

### Output Sample:

```json
{
  
}
```

## Post Management

### Create Post

**Description:** Create a new Post.

**POST (Body Data):** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post/create]

```json
{
  
}
```

### Output Sample:

```json
{
 
}
```

**GET:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu]

**Description:** Get all Posts.

### Output Sample:

```json
[
  {
    
  }
  
]
```

**GET/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Get a Post.

### Output Sample:

```json
{
  
}
```
**PATCH/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Update a post.

### Output Sample:

```json
{
  
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Delete a Post.

### Output Sample:

```json
{
  
}
```
