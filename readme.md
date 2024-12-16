
# Menu Management & Stuff Management API

This API serves as the backend for a menu management system and "Stuff" management operations. It provides features like creating, reading, updating, and deleting menu items while also enabling efficient management of "Stuff" records with role-based access control.

---

## Features

-- Menu Management

- CRUD operations for menu items.
- Input validation with Zod schema.
- Structured and consistent responses.

-- Stuff Management

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

-- Post Management

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

---

## Table of Contents

1. [Menu Management](#menu-management)
   - [Create Menu](https://review-nest-server.vercel.app/api/v1/menu/create)
   - [Get All Menus](https://review-nest-server.vercel.app/api/v1/menu)
   - [Get Single Menu](https://review-nest-server.vercel.app/api/v1/menu/:id)
   - [Update Menu](https://review-nest-server.vercel.app/api/v1/menu/:id)
   - [Delete Menu](https://review-nest-server.vercel.app/api/v1/menu/:id)

2. [Stuff Management](#stuff-management)
   - [Create Stuff](https://review-nest-server.vercel.app/api/v1/stuff/create)
   - [Get All Stuff](https://review-nest-server.vercel.app/api/v1/stuff)
   - [Get Single Stuff](https://review-nest-server.vercel.app/api/v1/stuff/:id)
   - [Update Stuff](https://review-nest-server.vercel.app/api/v1/stuff/:id)
   - [Delete Stuff](https://review-nest-server.vercel.app/api/v1/stuff/:id)

3. [Post Management](#post-management)
   - [Create Post](https://review-nest-server.vercel.app/api/v1/post/create)
   - [Get All Post](https://review-nest-server.vercel.app/api/v1/post)
   - [Get Single Post](https://review-nest-server.vercel.app/api/v1/post/:id)
   - [Update Post](https://review-nest-server.vercel.app/api/v1/post/:id)
   - [Delete Post](https://review-nest-server.vercel.app/api/v1/post/:id)
---

 ## Menu Management

### Create Menu/Navigation

**Description:** Create a new menu item.

**POST (Body Data):** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/create]

```json
{
    "menu": "Main Menu",
    "subMenu": [
      "Submenu 1",
      "Submenu 2",
      "Submenu 3"
    ]
  }
```

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Menu created successfully!",
    "data": {
        "menu": "Main Menu",
        "subMenu": [
            "Submenu 1",
            "Submenu 2",
            "Submenu 3"
        ],
        "_id": "675d98b57175633d1a2732a1",
        "createdAt": "2024-12-14T14:39:49.282Z",
        "updatedAt": "2024-12-14T14:39:49.282Z",
        "__v": 0,
        "id": "675d98b57175633d1a2732a1"
    }
}
```

**GET:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu]

**Description:** Get menu items.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Menu Get SuccessFully",
    "data": [

        {
            "_id": "675d8d946cf004eeeeed8ef5",
            "menu": "woman",
            "subMenu": [
                "face wash",
                "watch"
            ],
            "createdAt": "2024-12-14T13:52:20.163Z",
            "updatedAt": "2024-12-14T13:52:32.245Z",
            "__v": 1,
            "id": "675d8d946cf004eeeeed8ef5"
        },
        {
            "_id": "675d8e1a6cf004eeeeed8efe",
            "menu": "siramics",
            "subMenu": [
                "plate",
                "cup"
            ],
            "createdAt": "2024-12-14T13:54:34.276Z",
            "updatedAt": "2024-12-14T13:55:35.878Z",
            "__v": 1,
            "id": "675d8e1a6cf004eeeeed8efe"
        },

    ]
}
```

**GET/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Get menu item.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Get Single Menu SuccessFully",
    "data": {
        "_id": "675d8a34f418e03835591597",
        "menu": "siramics",
        "subMenu": [
            "mugs"
        ],
        "createdAt": "2024-12-14T13:37:56.953Z",
        "updatedAt": "2024-12-14T13:55:50.276Z",
        "__v": 4,
        "id": "675d8a34f418e03835591597"
    }
}
```
**PATCH/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Update menu item.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Update Single Menu SuccessFully",
    "data": {
        "_id": "675d8a34f418e03835591597",
        "menu": "siramics",
        "subMenu": [
            "mugs",
            "sub menu"
        ],
        "createdAt": "2024-12-14T13:37:56.953Z",
        "updatedAt": "2024-12-14T14:54:39.996Z",
        "__v": 4,
        "id": "675d8a34f418e03835591597"
    }
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/menu/:id]

**Description:** Delete menu item.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Delete Single Menu SuccessFully",
    "data": {
        "_id": "675d8a34f418e03835591597",
        "menu": "siramics",
        "subMenu": [
            "mugs",
            "sub menu"
        ],
        "createdAt": "2024-12-14T13:37:56.953Z",
        "updatedAt": "2024-12-14T14:54:39.996Z",
        "__v": 4,
        "id": "675d8a34f418e03835591597"
    }
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
    "role": "admin",
    "stuff": {
        "name": {
            "firstName": "Mamun",
            "middleName": "",
            "lastName": "Ahmed"
        },
        "email": "mamunkhan@gmail.com",
        "image": "https://example.com/image.jpg",
        "contact": "01757484945",
        "emergencyContact": "01304653636",
        "address": "Sylet, Habiganj"
    }
}

```

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "A-00003 created successfully!",
    "data": {
        "_id": "675da0627175633d1a2732cc",
        "id": "A-00003",
        "role": "admin",
        "stuff": {
            "_id": "675da0627175633d1a2732c9",
            "id": "A-00003",
            "name": {
                "firstName": "Mamun",
                "middleName": "",
                "lastName": "Ahmed",
                "_id": "675da0627175633d1a2732ca",
                "id": "675da0627175633d1a2732ca"
            },
            "email": "mamunkhan@gmail.com",
            "image": "https://example.com/image.jpg",
            "contact": "01757484945",
            "emergencyContact": "01304653636",
            "address": "Sylet, Habiganj",
            "createdAt": "2024-12-14T15:12:34.896Z",
            "updatedAt": "2024-12-14T15:12:34.896Z",
            "__v": 0
        },
        "createdAt": "2024-12-14T15:12:34.954Z",
        "updatedAt": "2024-12-14T15:12:34.954Z",
        "__v": 0
    }
}
```

**GET:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff]

**Description:** Get all Stuff.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Admins Retrieved successfully!",
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 6
    },
    "data": [
        {
            "_id": "675da0627175633d1a2732c9",
            "id": "A-00003",
            "name": {
                "firstName": "Mamun",
                "middleName": "",
                "lastName": "Ahmed",
                "_id": "675da0627175633d1a2732ca",
                "id": "675da0627175633d1a2732ca"
            },
            "email": "mamunkhan@gmail.com",
            "image": "https://example.com/image.jpg",
            "contact": "01757484945",
            "emergencyContact": "01304653636",
            "address": "Sylet, Habiganj",
            "createdAt": "2024-12-14T15:12:34.896Z",
            "updatedAt": "2024-12-14T15:12:34.896Z",
            "__v": 0
        },
        {
            "_id": "675da0057175633d1a2732bd",
            "id": "CW-00003",
            "name": {
                "firstName": "Mamun",
                "middleName": "",
                "lastName": "Ahmed",
                "_id": "675da0057175633d1a2732be",
                "id": "675da0057175633d1a2732be"
            },
            "email": "mamunahmed@gmail.com",
            "image": "https://example.com/image.jpg",
            "contact": "017700000989",
            "emergencyContact": "01304653636",
            "address": "Sylet, Habiganj",
            "createdAt": "2024-12-14T15:11:01.611Z",
            "updatedAt": "2024-12-14T15:11:01.611Z",
            "__v": 0
        },



    ]
}
```

**GET/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Get a Stuff.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Admin Retrieved successfully!",
    "data": {
        "_id": "675da0627175633d1a2732c9",
        "id": "A-00003",
        "name": {
            "firstName": "Mamun",
            "middleName": "",
            "lastName": "Ahmed",
            "_id": "675da0627175633d1a2732ca",
            "id": "675da0627175633d1a2732ca"
        },
        "email": "mamunkhan@gmail.com",
        "image": "https://example.com/image.jpg",
        "contact": "01757484945",
        "emergencyContact": "01304653636",
        "address": "Sylet, Habiganj",
        "createdAt": "2024-12-14T15:12:34.896Z",
        "updatedAt": "2024-12-14T15:12:34.896Z",
        "__v": 0
    }
}
```
**PATCH/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Update profile info it self.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Admin Updated successfully!",
    "data": {
        "_id": "675da0057175633d1a2732bd",
        "id": "CW-00003",
        "name": {
            "firstName": "Mamun",
            "middleName": "",
            "lastName": "Ahmed",
            "_id": "675da0057175633d1a2732be",
            "id": "675da0057175633d1a2732be"
        },
        "email": "mamunahmed@gmail.com",
        "image": "https://example.com/image.jpg",
        "contact": "017700000989",
        "emergencyContact": "01304653636",
        "address": "Sylet, Habiganj, Chhatiain",
        "createdAt": "2024-12-14T15:11:01.611Z",
        "updatedAt": "2024-12-14T16:59:34.189Z",
        "__v": 0
    }
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/stuff/:id]

**Description:** Delete a Stuff.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Admin Deleted successfully!",
    "data": {
        "_id": "675da0627175633d1a2732c9",
        "id": "A-00003",
        "name": {
            "firstName": "Mamun",
            "middleName": "",
            "lastName": "Ahmed",
            "_id": "675da0627175633d1a2732ca",
            "id": "675da0627175633d1a2732ca"
        },
        "email": "mamunkhan@gmail.com",
        "image": "https://example.com/image.jpg",
        "contact": "01757484945",
        "emergencyContact": "01304653636",
        "address": "Sylet, Habiganj",
        "createdAt": "2024-12-14T15:12:34.896Z",
        "updatedAt": "2024-12-14T15:12:34.896Z",
        "__v": 0
    }
}
```

## Post Management

### Create Post

**Description:** Create a new Post.

**POST (Body Data):** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post/create]

```json
{
    "seoTitle": "Ultimate Guide to JavaScript",
    "slug": "ultimate-guide-to-javascript",
    "metaDescription": "A detailed guide to mastering JavaScript for web development.",
    "canonicalUrl": "https://example.com/ultimate-guide-to-javascript",
    "keywords": "JavaScript, programming, web development",
    "ogTitle": "Master JavaScript with Our Ultimate Guide",
    "ogImage": "https://example.com/images/javascript-guide.jpg",
    "ogDescription": "Discover tips, tricks, and in-depth tutorials on JavaScript.",
    "structuredData": "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Ultimate Guide to JavaScript\",\"author\":\"Jane Smith\"}",
    "productTitle": "JavaScript Handbook 2024",
    "subTitle": "The only JavaScript resource you need",
    "authorName": "Jane Smith",
    "price": "19.99",
    "review": "4.9/5",
    "availability": "Available Now",
    "tags": ["JavaScript", "Programming", "Coding"],
    "menu": "Development Resources",
    "subMenu": "JavaScript Tutorials",
    "editorData": "<h1>Welcome to the Ultimate Guide to JavaScript</h1><p>Start your journey here.</p>"
  }
```

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Post Created SuccessFullly",
    "data": {
        "seoTitle": "Ultimate Guide to JavaScript",
        "slug": "ultimate-guide-to-javascript",
        "metaDescription": "A detailed guide to mastering JavaScript for web development.",
        "canonicalUrl": "https://example.com/ultimate-guide-to-javascript",
        "keywords": "JavaScript, programming, web development",
        "ogTitle": "Master JavaScript with Our Ultimate Guide",
        "ogImage": "https://example.com/images/javascript-guide.jpg",
        "ogDescription": "Discover tips, tricks, and in-depth tutorials on JavaScript.",
        "structuredData": "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Ultimate Guide to JavaScript\",\"author\":\"Jane Smith\"}",
        "productTitle": "JavaScript Handbook 2024",
        "subTitle": "The only JavaScript resource you need",
        "authorName": "Jane Smith",
        "price": "19.99",
        "review": "4.9/5",
        "availability": "Available Now",
        "tags": [
            "JavaScript",
            "Programming",
            "Coding"
        ],
        "menu": "Development Resources",
        "subMenu": "JavaScript Tutorials",
        "editorData": "<h1>Welcome to the Ultimate Guide to JavaScript</h1><p>Start your journey here.</p>",
        "_id": "675db1c37175633d1a2732e2",
        "__v": 0
    }
}
```

**GET:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post]

**Description:** Get all Posts.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Get All Post SuccessFullly",
    "data": [
        {
            "_id": "675c6af9b796711c52329ad7",
            "seoTitle": "The Ultimate Guide to SEO",
            "slug": "ultimate-seo-guide",
            "metaDescription": "An in-depth guide to mastering SEO for better website visibility.",
            "canonicalUrl": "https://example.com/ultimate-seo-guide",
            "keywords": "SEO, search engine optimization, online marketing, website ranking",
            "ogTitle": "SEO Best Practices",
            "ogImage": "https://example.com/images/seo-guide.jpg",
            "ogDescription": "Explore the best practices for SEO to rank higher on search engines.",
            "structuredData": "{ \"@context\": \"https://schema.org\", \"@type\": \"Article\", \"name\": \"SEO Guide\" }",
            "productTitle": "Comprehensive SEO Guide",
            "subTitle": "Boost Your Website Ranking",
            "authorName": "Alice Johnson",
            "price": "$49.99",
            "review": "4.9/5",
            "availability": "In Stock",
            "tags": [
                "SEO",
                "Marketing",
                "Digital Marketing",
                "Guide"
            ],
            "menu": "Digital Marketing",
            "subMenu": "SEO",
            "editorData": "<p>Learn how to optimize your website for search engines with our comprehensive guide.</p>",
            "__v": 0
        },
        {
            "_id": "675ceba4b2df20f692182e03",
            "seoTitle": "best software in usa",
            "slug": "best-software-in-usa",
            "metaDescription": "Choose the domain you want to manage DNS ",
            "canonicalUrl": "s/68527235/add-both-important-selector-strategy-for-tailwind-configuration",
            "keywords": "website",
            "ogTitle": "usa best software",
            "ogImage": "https://stackoverflow.com/question",
            "ogDescription": "The important option lets you control whether or not Tailwind's utilities should be marked with !important . This can be really useful when using Tailwind wit",
            "structuredData": "can be really useful when using Tailwind wit",
            "productTitle": "Exclusive t-shirts in usa",
            "subTitle": "new thsirt is here",
            "authorName": "joy sutradhor",
            "price": "10",
            "review": "5000",
            "availability": "Yes",
            "tags": [
                "web",
                "editor",
                "list"
            ],
            "menu": "Kitchen/Dining",
            "subMenu": "Mirror",
            "editorData": "## **Features**\n\nTODO: Add features\n\n**Tech Stack**\n\nNovel’s codebase is [**fully open-source**](https://github.com/steven-tey/novel) and is built on top of the following technologies:\n\n- [**Tiptap**](https://tiptap.dev/) – framework\n- [**TypeScript**](https://www.typescriptlang.org/) – language\n- [**RadixUI**](https://www.radix-ui.com/primitives) – components\n- [**Cmdk**](https://cmdk.paco.me/) – command",
            "__v": 0
        },


    ]
}
```

**GET/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post/:id]

**Description:** Get a Post.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Get Single Post SuccessFullly",
    "data": {
        "_id": "675c6af9b796711c52329ad7",
        "seoTitle": "The Ultimate Guide to SEO",
        "slug": "ultimate-seo-guide",
        "metaDescription": "An in-depth guide to mastering SEO for better website visibility.",
        "canonicalUrl": "https://example.com/ultimate-seo-guide",
        "keywords": "SEO, search engine optimization, online marketing, website ranking",
        "ogTitle": "SEO Best Practices",
        "ogImage": "https://example.com/images/seo-guide.jpg",
        "ogDescription": "Explore the best practices for SEO to rank higher on search engines.",
        "structuredData": "{ \"@context\": \"https://schema.org\", \"@type\": \"Article\", \"name\": \"SEO Guide\" }",
        "productTitle": "Comprehensive SEO Guide",
        "subTitle": "Boost Your Website Ranking",
        "authorName": "Alice Johnson",
        "price": "$49.99",
        "review": "4.9/5",
        "availability": "In Stock",
        "tags": [
            "SEO",
            "Marketing",
            "Digital Marketing",
            "Guide"
        ],
        "menu": "Digital Marketing",
        "subMenu": "SEO",
        "editorData": "<p>Learn how to optimize your website for search engines with our comprehensive guide.</p>",
        "__v": 0
    }
}
```
**PATCH/:id:** (Shared API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post/:id]

**Description:** Update a post.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Update Post SuccessFullly",
    "data": {
        "_id": "675ceba4b2df20f692182e03",
        "seoTitle": "best software company in usa",
        "slug": "best-software-in-usa",
        "metaDescription": "Choose the domain you want to manage DNS ",
        "canonicalUrl": "s/68527235/add-both-important-selector-strategy-for-tailwind-configuration",
        "keywords": "website",
        "ogTitle": "usa best software",
        "ogImage": "https://stackoverflow.com/question",
        "ogDescription": "The important option lets you control whether or not Tailwind's utilities should be marked with !important . This can be really useful when using Tailwind wit",
        "structuredData": "can be really useful when using Tailwind wit",
        "productTitle": "Exclusive t-shirts in usa",
        "subTitle": "new thsirt is here",
        "authorName": "joy sutradhor",
        "price": "10",
        "review": "5000",
        "availability": "Yes",
        "tags": [
            "web",
            "editor",
            "list"
        ],
        "menu": "Kitchen/Dining",
        "subMenu": "Mirror",
        "editorData": "## **Features**\n\nTODO: Add features\n\n**Tech Stack**\n\nNovel’s codebase is [**fully open-source**](https://github.com/steven-tey/novel) and is built on top of the following technologies:\n\n- [**Tiptap**](https://tiptap.dev/) – framework\n- [**TypeScript**](https://www.typescriptlang.org/) – language\n- [**RadixUI**](https://www.radix-ui.com/primitives) – components\n- [**Cmdk**](https://cmdk.paco.me/) – command",
        "__v": 0
    }
}
```

**DELETE/:id:** (Admin API)

**API EndPoint:** [https://review-nest-server.vercel.app/api/v1/post/:id]

**Description:** Delete a Post.

### Output Sample:

```json
{
    "statusCode": 200,
    "success": true,
    "message": "Remove Post SuccessFullly",
    "data": {
        "_id": "675c6af9b796711c52329ad7",
        "seoTitle": "The Ultimate Guide to SEO",
        "slug": "ultimate-seo-guide",
        "metaDescription": "An in-depth guide to mastering SEO for better website visibility.",
        "canonicalUrl": "https://example.com/ultimate-seo-guide",
        "keywords": "SEO, search engine optimization, online marketing, website ranking",
        "ogTitle": "SEO Best Practices",
        "ogImage": "https://example.com/images/seo-guide.jpg",
        "ogDescription": "Explore the best practices for SEO to rank higher on search engines.",
        "structuredData": "{ \"@context\": \"https://schema.org\", \"@type\": \"Article\", \"name\": \"SEO Guide\" }",
        "productTitle": "Comprehensive SEO Guide",
        "subTitle": "Boost Your Website Ranking",
        "authorName": "Alice Johnson",
        "price": "$49.99",
        "review": "4.9/5",
        "availability": "In Stock",
        "tags": [
            "SEO",
            "Marketing",
            "Digital Marketing",
            "Guide"
        ],
        "menu": "Digital Marketing",
        "subMenu": "SEO",
        "editorData": "<p>Learn how to optimize your website for search engines with our comprehensive guide.</p>",
        "__v": 0
    }
}
```
