
# Menu Management & Stuff Management API

This API serves as the backend for a menu management system and "Stuff" management operations. It provides features like creating, reading, updating, and deleting menu items while also enabling efficient management of "Stuff" records with role-based access control.

---

## Features

[Menu Management](#menu-management)

- CRUD operations for menu items.
- Input validation with Zod schema.
- Structured and consistent responses.

[Stuff Management](#stuff-management)

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

[Stuff Management](#stuff-management)

- Role-based access control for secure data handling.
- Supports pagination and filtering.
- Designed for scalability and maintainability.

---

## Table of Contents

1. [Menu Management](#menu-management)
   - [Create Post](<a href="" target="_blank">Create Post</a>)
   - [Create Menu](https://review-nest-server.vercel.app/api/v1/post/create)
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

### Request Sample:


```json
{
  "seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
  "slug": "sofa-ottomans",
  "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape.",
  "canonicalUrl": "http://my-home-page.com",
  "keywords": "new sofa table",
  "ogTitle": "Reversible Chaise Wood Frame",
  "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
  "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape.",
  "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape.",
  "tags": [
    "new sofa",
    "sofa make"
  ],
  "review": "100",
  "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
  "authorName": "Joy sutrahdor",
  "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
  "productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
  "allProducts": [
    {
      "label": "Top Pick",
      "title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
      "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
      "productMainImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689720912-389370391.webp",
      "productImages": [
        "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689720912-257810031.webp",
        "http://localhost:8080/uploads/medley-sofas-collection-1736689720913-626793445.webp"
      ],
      "buyingOptions": [
        {
          "sourceName": "amazon",
          "source": "http://my-home-page.com",
          "price": "10",
          "availability": "In Stock"
        }
      ],
      "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
      "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>"
    }
  ],
  "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
  "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
  "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
  "menu": "furniture",
  "subMenu": "sofas"
}
```


### Output Sample:

```json
{
"_id": "6783c83807b42a11236a097f",
"seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
"slug": "Sofa-ottomans",
"metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
"canonicalUrl": "http://my-home-page.com",
"keywords": "new sofa table",
"ogTitle": "Reversible Chaise Wood Frame",
"ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
"ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
"structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
"tags": [
"new sofa",
"sofa make"
],
"review": "100",
"productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
"authorName": "Joy sutrahdor",
"productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
"productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
"allProducts": [
{
"label": "Top Pick",
"title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
"introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
"productMainImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689720912-389370391.webp",
"productImages": [
"http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689720912-257810031.webp",
"http://localhost:8080/uploads/medley-sofas-collection-1736689720913-626793445.webp"
],
"buyingOptions": [
{
"sourceName": "amazon",
"source": "http://my-home-page.com",
"price": "10",
"availability": "In Stock",
"_id": "6783c83807b42a11236a0981",
"id": "6783c83807b42a11236a0981"
}
],
"productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
"actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
"_id": "6783c83807b42a11236a0980"
}
],
"whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
"whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
"sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
"menu": "furniture",
"subMenu": "sofas",
"createdAt": "2025-01-12T13:48:40.971Z",
"updatedAt": "2025-01-12T13:48:40.971Z",
"__v": 0,
"id": "6783c83807b42a11236a097f"
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
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 7
    },
    "data": [
        {
            "_id": "6783c83807b42a11236a097f",
            "seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
            "slug": "Sofa-ottomans",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "Reversible Chaise Wood Frame",
            "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689720912-389370391.webp",
                    "productImages": [
                        "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689720912-257810031.webp",
                        "http://localhost:8080/uploads/medley-sofas-collection-1736689720913-626793445.webp"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c83807b42a11236a0981",
                            "id": "6783c83807b42a11236a0981"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c83807b42a11236a0980"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:48:40.971Z",
            "updatedAt": "2025-01-12T13:48:40.971Z",
            "__v": 0,
            "id": "6783c83807b42a11236a097f"
        },
        {
            "_id": "6783c80507b42a11236a097a",
            "seoTitle": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
            "slug": "chaise-lounge",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "Reversible Chaise Wood Frame",
            "ogImage": "http://localhost:8080/uploads/medley-sofas-collection-1736689669301-564218281.webp",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/images-1736689669302-725836909.jpeg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689669302-982193091.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689669304-715272779.webp",
                        "http://localhost:8080/uploads/medley-sofas-collection-1736689669305-787511769.webp",
                        "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689669306-47927433.webp"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c80507b42a11236a097c",
                            "id": "6783c80507b42a11236a097c"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c80507b42a11236a097b"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:47:49.372Z",
            "updatedAt": "2025-01-12T13:47:49.372Z",
            "__v": 0,
            "id": "6783c80507b42a11236a097a"
        },
        {
            "_id": "6783c7bc07b42a11236a0975",
            "seoTitle": "Belffin Modular Sectional Sofa Fabric U Shaped Couch Double Chaise",
            "slug": "sofa-fabric",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "Belffin Modular Sectional Sofa Fabric U",
            "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689596759-271153002.jpg",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689596761-398336850.webp",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Shintenchi Small  Couch with Ottoman",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689596772-864698409.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689596776-107327061.webp",
                        "http://localhost:8080/uploads/medley-sofas-collection-1736689596776-38107611.webp",
                        "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689596780-397877987.webp"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c7bc07b42a11236a0977",
                            "id": "6783c7bc07b42a11236a0977"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c7bc07b42a11236a0976"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:46:36.835Z",
            "updatedAt": "2025-01-12T13:46:36.835Z",
            "__v": 0,
            "id": "6783c7bc07b42a11236a0975"
        },
        {
            "_id": "6783c77307b42a11236a0970",
            "seoTitle": "Shintenchi Small Convertible Sectional Sofa Couch with Ottoman",
            "slug": "sectional-sofa",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "Shintenchi Small with Ottoman",
            "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689523148-456190681.jpg",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "Best Shintenchi Small Convertible Sectional Sofa Couch with Ottoman",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689523151-408735886.webp",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Shintenchi Small  Couch with Ottoman",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689523152-236838833.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/ssc-228-1736689523155-919196099.jpg",
                        "http://localhost:8080/uploads/ssc-229-1736689523156-564909730.jpg"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c77307b42a11236a0972",
                            "id": "6783c77307b42a11236a0972"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c77307b42a11236a0971"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:45:23.213Z",
            "updatedAt": "2025-01-12T13:45:23.213Z",
            "__v": 0,
            "id": "6783c77307b42a11236a0970"
        },
        {
            "_id": "6783c60407b42a11236a096b",
            "seoTitle": "YESHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
            "slug": "sofa-seater",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "YESHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
            "ogImage": "http://localhost:8080/uploads/ssc-229-1736689156356-544857394.jpg",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "YEBest SHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/ssc-228-1736689156358-321434784.jpg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Shaped Convertible Sectional Sofa",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689156362-254330825.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/ssc-228-1736689156367-736877881.jpg",
                        "http://localhost:8080/uploads/ssc-229-1736689156372-10210633.jpg"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c60407b42a11236a096d",
                            "id": "6783c60407b42a11236a096d"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c60407b42a11236a096c"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:39:16.437Z",
            "updatedAt": "2025-01-12T13:39:16.437Z",
            "__v": 0,
            "id": "6783c60407b42a11236a096b"
        },
        {
            "_id": "6783a93607b42a11236a0245",
            "seoTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
            "slug": "dark-sofa",
            "metaDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "dark sofa",
            "ogTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
            "ogImage": "http://localhost:8080/uploads/ssc-228-1736681782499-896334126.jpg",
            "ogDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "structuredData": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "tags": [
                "new dark sofa",
                "sofa best price"
            ],
            "review": "100",
            "productTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic. Investing in a high-quality sofa is a decision you’ll appreciate every day, as it becomes a cherished part of your life and a centerpiece of your most memorable moments</p>",
            "productFeaturesImage": "http://localhost:8080/uploads/ssc-229-1736681782530-957398193.jpg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Dark Grey 3 Seat L-Shaped Couch with Storage",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.</p>",
                    "productMainImage": "http://localhost:8080/uploads/ssc-229-1736681782535-546759439.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/sfc-321-room-1736681782539-340987583.jpg",
                        "http://localhost:8080/uploads/ssc-202view-0vraydenoiser-1736681782542-172703259.jpg",
                        "http://localhost:8080/uploads/ssc-228-1736681782543-749280902.jpg"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783a93607b42a11236a0247",
                            "id": "6783a93607b42a11236a0247"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation. Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                    "_id": "6783a93607b42a11236a0246"
                }
            ],
            "whyTrustUs": "<p>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.</p>",
            "whoIsFor": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "sources": "<p>Sectional sofas are ideal for large spaces and families. These modular designs consist of multiple pieces that can be arranged in various configurations, such as L-shape, U-shape, or even semi-circular arrangements. Their adaptability makes them perfect for open-concept living rooms where the sofa often serves as a room divider.<br>A sleeper sofa, also known as a sofa bed, is a multifunctional piece that transforms into a bed. It’s a great choice for small apartments, studios, or homes that lack a dedicated guest room. Sleeper sofas are available in various styles, from pull-out beds to futons, catering to different space requirements and aesthetics.<br>Designed for two people, loveseats are compact and cozy. They’re perfect for small living rooms, bedrooms, or as complementary seating in a larger space. Despite their smaller size, loveseats come in a wide range of designs, from classic to modern.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T11:36:22.613Z",
            "updatedAt": "2025-01-12T11:36:22.613Z",
            "__v": 0,
            "id": "6783a93607b42a11236a0245"
        },
        {
            "_id": "6783a20007b42a112369ff6a",
            "seoTitle": "Sectional Sofa Couches for Living Room",
            "slug": "sofa-couches",
            "metaDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "best sofa",
            "ogTitle": "Sectional Sofa Couches for Living Room",
            "ogImage": "http://localhost:8080/uploads/sfc-321-room-1736679935973-26953341.jpg",
            "ogDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "structuredData": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
            "tags": [
                "sofa",
                "new sofa"
            ],
            "review": "100",
            "productTitle": "3 Seat Modern Couch, Sofas Convertible with Storage",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
            "productFeaturesImage": "http://localhost:8080/uploads/sdc-3106-rgbcolor-1736679935978-173907662.jpg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Sectional Sofa Couches for Living Room",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.</p>",
                    "productMainImage": "http://localhost:8080/uploads/ssc-202view-0vraydenoiser-1736679935982-923904988.jpg",
                    "productImages": [
                        "http://localhost:8080/uploads/ssc-228-1736679935983-310299463.jpg",
                        "http://localhost:8080/uploads/ssc-229-1736679935986-203455161.jpg"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783a20007b42a112369ff6c",
                            "id": "6783a20007b42a112369ff6c"
                        }
                    ],
                    "productDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic. Investing in a high-quality sofa is a decision you’ll appreciate every day, as it becomes a cherished part of your life and a centerpiece of your most memorable moments.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.Velvet adds a touch of luxury to any space. Its soft texture and rich colors make it a popular choice for formal living rooms or statement pieces. While velvet is visually appealing, it can be challenging to clean and may not be suitable for homes with pets.</p>",
                    "_id": "6783a20007b42a112369ff6b"
                }
            ],
            "whyTrustUs": "<p>Sectional sofas are ideal for large spaces and families. These modular designs consist of multiple pieces that can be arranged in various configurations, such as L-shape, U-shape, or even semi-circular arrangements. Their adaptability makes them perfect for open-concept living rooms where the sofa often serves as a room divider.<br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation. Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Velvet adds a touch of luxury to any space. Its soft texture and rich colors make it a popular choice for formal living rooms or statement pieces. While velvet is visually appealing, it can be challenging to clean and may not be suitable for homes with pets.Microfiber is a synthetic material that mimics the look and feel of suede. It is stain-resistant, durable, and easy to clean, making it a practical choice for families or busy households.</p>",
            "sources": "<p>he sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home. Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T11:05:36.054Z",
            "updatedAt": "2025-01-12T11:05:36.054Z",
            "__v": 0,
            "id": "6783a20007b42a112369ff6a"
        }
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
    "message": "Get Single Post SuccessFully",
    "data": {
        "result": {
            "_id": "6783c83807b42a11236a097f",
            "seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
            "slug": "Sofa-ottomans",
            "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "canonicalUrl": "http://my-home-page.com",
            "keywords": "new sofa table",
            "ogTitle": "Reversible Chaise Wood Frame",
            "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
            "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
            "tags": [
                "new sofa",
                "sofa make"
            ],
            "review": "100",
            "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
            "authorName": "Joy sutrahdor",
            "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
            "productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
            "allProducts": [
                {
                    "label": "Top Pick",
                    "title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
                    "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                    "productMainImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689720912-389370391.webp",
                    "productImages": [
                        "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689720912-257810031.webp",
                        "http://localhost:8080/uploads/medley-sofas-collection-1736689720913-626793445.webp"
                    ],
                    "buyingOptions": [
                        {
                            "sourceName": "amazon",
                            "source": "http://my-home-page.com",
                            "price": "10",
                            "availability": "In Stock",
                            "_id": "6783c83807b42a11236a0981"
                        }
                    ],
                    "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                    "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                    "_id": "6783c83807b42a11236a0980"
                }
            ],
            "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
            "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
            "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
            "menu": "furniture",
            "subMenu": "sofas",
            "createdAt": "2025-01-12T13:48:40.971Z",
            "updatedAt": "2025-01-12T13:48:40.971Z",
            "__v": 0,
            "visitCount": 1
        },
        "relatedCount": 6,
        "relatedPosts": [
            {
                "_id": "6783a20007b42a112369ff6a",
                "seoTitle": "Sectional Sofa Couches for Living Room",
                "slug": "sofa-couches",
                "metaDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "best sofa",
                "ogTitle": "Sectional Sofa Couches for Living Room",
                "ogImage": "http://localhost:8080/uploads/sfc-321-room-1736679935973-26953341.jpg",
                "ogDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "structuredData": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "tags": [
                    "sofa",
                    "new sofa"
                ],
                "review": "100",
                "productTitle": "3 Seat Modern Couch, Sofas Convertible with Storage",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                "productFeaturesImage": "http://localhost:8080/uploads/sdc-3106-rgbcolor-1736679935978-173907662.jpg",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Sectional Sofa Couches for Living Room",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.</p>",
                        "productMainImage": "http://localhost:8080/uploads/ssc-202view-0vraydenoiser-1736679935982-923904988.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/ssc-228-1736679935983-310299463.jpg",
                            "http://localhost:8080/uploads/ssc-229-1736679935986-203455161.jpg"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783a20007b42a112369ff6c",
                                "id": "6783a20007b42a112369ff6c"
                            }
                        ],
                        "productDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic. Investing in a high-quality sofa is a decision you’ll appreciate every day, as it becomes a cherished part of your life and a centerpiece of your most memorable moments.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.Velvet adds a touch of luxury to any space. Its soft texture and rich colors make it a popular choice for formal living rooms or statement pieces. While velvet is visually appealing, it can be challenging to clean and may not be suitable for homes with pets.</p>",
                        "_id": "6783a20007b42a112369ff6b"
                    }
                ],
                "whyTrustUs": "<p>Sectional sofas are ideal for large spaces and families. These modular designs consist of multiple pieces that can be arranged in various configurations, such as L-shape, U-shape, or even semi-circular arrangements. Their adaptability makes them perfect for open-concept living rooms where the sofa often serves as a room divider.<br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation. Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "whoIsFor": "<p>Velvet adds a touch of luxury to any space. Its soft texture and rich colors make it a popular choice for formal living rooms or statement pieces. While velvet is visually appealing, it can be challenging to clean and may not be suitable for homes with pets.Microfiber is a synthetic material that mimics the look and feel of suede. It is stain-resistant, durable, and easy to clean, making it a practical choice for families or busy households.</p>",
                "sources": "<p>he sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home. Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T11:05:36.054Z",
                "updatedAt": "2025-01-12T11:05:36.054Z",
                "__v": 0,
                "id": "6783a20007b42a112369ff6a"
            },
            {
                "_id": "6783a93607b42a11236a0245",
                "seoTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
                "slug": "dark-sofa",
                "metaDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "dark sofa",
                "ogTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
                "ogImage": "http://localhost:8080/uploads/ssc-228-1736681782499-896334126.jpg",
                "ogDescription": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "structuredData": "Crafted for convenient shipment and easy assembly. All parts are marked with either a letter or a number. You just need to follow the steps install the couches for living room clearance. You can assemble the l shaped couch easily within 30 minutes.",
                "tags": [
                    "new dark sofa",
                    "sofa best price"
                ],
                "review": "100",
                "productTitle": "78'' Dark Grey 3 Seat L-Shaped Couch",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic. Investing in a high-quality sofa is a decision you’ll appreciate every day, as it becomes a cherished part of your life and a centerpiece of your most memorable moments</p>",
                "productFeaturesImage": "http://localhost:8080/uploads/ssc-229-1736681782530-957398193.jpg",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Dark Grey 3 Seat L-Shaped Couch with Storage",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.</p>",
                        "productMainImage": "http://localhost:8080/uploads/ssc-229-1736681782535-546759439.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/sfc-321-room-1736681782539-340987583.jpg",
                            "http://localhost:8080/uploads/ssc-202view-0vraydenoiser-1736681782542-172703259.jpg",
                            "http://localhost:8080/uploads/ssc-228-1736681782543-749280902.jpg"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783a93607b42a11236a0247",
                                "id": "6783a93607b42a11236a0247"
                            }
                        ],
                        "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation. Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                        "_id": "6783a93607b42a11236a0246"
                    }
                ],
                "whyTrustUs": "<p>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.</p>",
                "whoIsFor": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "sources": "<p>Sectional sofas are ideal for large spaces and families. These modular designs consist of multiple pieces that can be arranged in various configurations, such as L-shape, U-shape, or even semi-circular arrangements. Their adaptability makes them perfect for open-concept living rooms where the sofa often serves as a room divider.<br>A sleeper sofa, also known as a sofa bed, is a multifunctional piece that transforms into a bed. It’s a great choice for small apartments, studios, or homes that lack a dedicated guest room. Sleeper sofas are available in various styles, from pull-out beds to futons, catering to different space requirements and aesthetics.<br>Designed for two people, loveseats are compact and cozy. They’re perfect for small living rooms, bedrooms, or as complementary seating in a larger space. Despite their smaller size, loveseats come in a wide range of designs, from classic to modern.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T11:36:22.613Z",
                "updatedAt": "2025-01-12T11:36:22.613Z",
                "__v": 0,
                "id": "6783a93607b42a11236a0245"
            },
            {
                "_id": "6783c60407b42a11236a096b",
                "seoTitle": "YESHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
                "slug": "sofa-seater",
                "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "new sofa table",
                "ogTitle": "YESHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
                "ogImage": "http://localhost:8080/uploads/ssc-229-1736689156356-544857394.jpg",
                "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "tags": [
                    "new sofa",
                    "sofa make"
                ],
                "review": "100",
                "productTitle": "YEBest SHOMY L-Shaped Convertible Sectional Sofa 3 Seater",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
                "productFeaturesImage": "http://localhost:8080/uploads/ssc-228-1736689156358-321434784.jpg",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Shaped Convertible Sectional Sofa",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                        "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689156362-254330825.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/ssc-228-1736689156367-736877881.jpg",
                            "http://localhost:8080/uploads/ssc-229-1736689156372-10210633.jpg"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783c60407b42a11236a096d",
                                "id": "6783c60407b42a11236a096d"
                            }
                        ],
                        "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                        "_id": "6783c60407b42a11236a096c"
                    }
                ],
                "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
                "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T13:39:16.437Z",
                "updatedAt": "2025-01-12T13:39:16.437Z",
                "__v": 0,
                "id": "6783c60407b42a11236a096b"
            },
            {
                "_id": "6783c77307b42a11236a0970",
                "seoTitle": "Shintenchi Small Convertible Sectional Sofa Couch with Ottoman",
                "slug": "sectional-sofa",
                "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "new sofa table",
                "ogTitle": "Shintenchi Small with Ottoman",
                "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689523148-456190681.jpg",
                "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "tags": [
                    "new sofa",
                    "sofa make"
                ],
                "review": "100",
                "productTitle": "Best Shintenchi Small Convertible Sectional Sofa Couch with Ottoman",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
                "productFeaturesImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689523151-408735886.webp",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Shintenchi Small  Couch with Ottoman",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                        "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689523152-236838833.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/ssc-228-1736689523155-919196099.jpg",
                            "http://localhost:8080/uploads/ssc-229-1736689523156-564909730.jpg"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783c77307b42a11236a0972",
                                "id": "6783c77307b42a11236a0972"
                            }
                        ],
                        "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                        "_id": "6783c77307b42a11236a0971"
                    }
                ],
                "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
                "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T13:45:23.213Z",
                "updatedAt": "2025-01-12T13:45:23.213Z",
                "__v": 0,
                "id": "6783c77307b42a11236a0970"
            },
            {
                "_id": "6783c7bc07b42a11236a0975",
                "seoTitle": "Belffin Modular Sectional Sofa Fabric U Shaped Couch Double Chaise",
                "slug": "sofa-fabric",
                "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "new sofa table",
                "ogTitle": "Belffin Modular Sectional Sofa Fabric U",
                "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689596759-271153002.jpg",
                "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "tags": [
                    "new sofa",
                    "sofa make"
                ],
                "review": "100",
                "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
                "productFeaturesImage": "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689596761-398336850.webp",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Shintenchi Small  Couch with Ottoman",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                        "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689596772-864698409.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689596776-107327061.webp",
                            "http://localhost:8080/uploads/medley-sofas-collection-1736689596776-38107611.webp",
                            "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689596780-397877987.webp"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783c7bc07b42a11236a0977",
                                "id": "6783c7bc07b42a11236a0977"
                            }
                        ],
                        "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                        "_id": "6783c7bc07b42a11236a0976"
                    }
                ],
                "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
                "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T13:46:36.835Z",
                "updatedAt": "2025-01-12T13:46:36.835Z",
                "__v": 0,
                "id": "6783c7bc07b42a11236a0975"
            },
            {
                "_id": "6783c80507b42a11236a097a",
                "seoTitle": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
                "slug": "chaise-lounge",
                "metaDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "canonicalUrl": "http://my-home-page.com",
                "keywords": "new sofa table",
                "ogTitle": "Reversible Chaise Wood Frame",
                "ogImage": "http://localhost:8080/uploads/medley-sofas-collection-1736689669301-564218281.webp",
                "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
                "tags": [
                    "new sofa",
                    "sofa make"
                ],
                "review": "100",
                "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
                "authorName": "Joy sutrahdor",
                "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
                "productFeaturesImage": "http://localhost:8080/uploads/images-1736689669302-725836909.jpeg",
                "allProducts": [
                    {
                        "label": "Top Pick",
                        "title": "Reversible Chaise Lounge, Sturdy Solid Wood Frame",
                        "introDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.</p>",
                        "productMainImage": "http://localhost:8080/uploads/sfc-321-room-1736689669302-982193091.jpg",
                        "productImages": [
                            "http://localhost:8080/uploads/JarvisCornerSofaLifestyle_533x-1736689669304-715272779.webp",
                            "http://localhost:8080/uploads/medley-sofas-collection-1736689669305-787511769.webp",
                            "http://localhost:8080/uploads/PRODZFRSP000000000045759_brondby_small-fabric-corner-sofa__lifestyle-1736689669306-47927433.webp"
                        ],
                        "buyingOptions": [
                            {
                                "sourceName": "amazon",
                                "source": "http://my-home-page.com",
                                "price": "10",
                                "availability": "In Stock",
                                "_id": "6783c80507b42a11236a097c",
                                "id": "6783c80507b42a11236a097c"
                            }
                        ],
                        "productDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Measure your space to ensure the sofa fits comfortably without overwhelming the room. Consider the layout and how the sofa will interact with other furniture. For smaller spaces, opt for compact designs like loveseats or armless sofas.</p>",
                        "actualDes": "<p>The origins of sofas date back to ancient civilizations. The Egyptians and Greeks used upholstered benches, while the Romans introduced reclining couches for dining. Over centuries, the design and purpose of sofas evolved, reflecting cultural and technological advancements. From the ornate settees of the Victorian era to the sleek, modern designs of today, sofas have continually adapted to changing tastes and lifestyles.<br><br>Your sofa should complement the overall decor of your home. Consider the color, shape, and design details, such as tufting, nailhead trims, or exposed legs. Neutral colors are versatile and timeless, while bold hues or patterns can make a statement.</p>",
                        "_id": "6783c80507b42a11236a097b"
                    }
                ],
                "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
                "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
                "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
                "menu": "furniture",
                "subMenu": "sofas",
                "createdAt": "2025-01-12T13:47:49.372Z",
                "updatedAt": "2025-01-12T13:47:49.372Z",
                "__v": 0,
                "id": "6783c80507b42a11236a097a"
            }
        ]
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
        "_id": "6783c83807b42a11236a097f",
        "seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
        "slug": "Sofa-ottomans",
        "metaDescription": "Updated meta description for the post",
        "canonicalUrl": "http://my-home-page.com",
        "keywords": "new sofa table",
        "ogTitle": "Reversible Chaise Wood Frame",
        "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
        "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
        "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
        "tags": [
            "sofa",
            "sofas"
        ],
        "review": "100",
        "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
        "authorName": "Joy sutrahdor",
        "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
        "productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
        "allProducts": [
            {
                "label": "Updated Product",
                "title": "Updated Product Title",
                "introDes": "Updated intro description",
                "productMainImage": "updated-main-image.jpg",
                "productImages": [
                    "updated-image1.jpg",
                    "updated-image2.jpg"
                ],
                "buyingOptions": [
                    {
                        "sourceName": "Amazon",
                        "source": "https://updatedsource.com",
                        "price": "400",
                        "availability": "Out of Stock",
                        "_id": "6783d328ba4cc2ad5ba7de7e",
                        "id": "6783d328ba4cc2ad5ba7de7e"
                    }
                ],
                "productDes": "Updated product description",
                "actualDes": "Updated actual description",
                "_id": "6783d328ba4cc2ad5ba7de7d"
            }
        ],
        "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
        "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
        "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
        "menu": "furniture",
        "subMenu": "sofas",
        "createdAt": "2025-01-12T13:48:40.971Z",
        "updatedAt": "2025-01-12T14:35:20.799Z",
        "__v": 0,
        "id": "6783c83807b42a11236a097f"
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
    "message": "Post removed successfully",
    "data": {
        "_id": "6783c83807b42a11236a097f",
        "seoTitle": "Sofa Set with Ottomans Fabric Dark Grey",
        "slug": "Sofa-ottomans",
        "metaDescription": "Updated meta description for the post",
        "canonicalUrl": "http://my-home-page.com",
        "keywords": "new sofa table",
        "ogTitle": "Reversible Chaise Wood Frame",
        "ogImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720907-611682576.jpg",
        "ogDescription": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
        "structuredData": "Selected corduroy fabrics are skin-friendly and soft, with high-grade sponge filling, the sitting feeling is both soft and elastic, ensuring long-lasting comfort. The cushions are vacuum compressed and are recommended to be left for 24 hours after arrival to allow them to fluff up naturally and show their perfect shape",
        "tags": [
            "sofa",
            "sofas"
        ],
        "review": "100",
        "productTitle": "Belffin Modular Best Sectional Sofa Fabric U Shaped Couch Double Chaise",
        "authorName": "Joy sutrahdor",
        "productCommonIntroDes": "<p>A sofa is more than just a piece of furniture; it is the cornerstone of comfort and style in any home. Whether you prefer a classic Chesterfield, a versatile sectional, or a cozy loveseat, the right sofa can transform your living space into a haven of relaxation and warmth. By considering factors like size, material, style, and functionality, you can find a sofa that perfectly suits your needs and enhances your home’s aesthetic.<br></p>",
        "productFeaturesImage": "http://localhost:8080/uploads/ad3ec91cb8832946abbdc75686b5908b-1736689720910-420502780.jpg",
        "allProducts": [
            {
                "label": "Updated Product",
                "title": "Updated Product Title",
                "introDes": "Updated intro description",
                "productMainImage": "updated-main-image.jpg",
                "productImages": [
                    "updated-image1.jpg",
                    "updated-image2.jpg"
                ],
                "buyingOptions": [
                    {
                        "sourceName": "Amazon",
                        "source": "https://updatedsource.com",
                        "price": "400",
                        "availability": "Out of Stock",
                        "_id": "6783d328ba4cc2ad5ba7de7e",
                        "id": "6783d328ba4cc2ad5ba7de7e"
                    }
                ],
                "productDes": "Updated product description",
                "actualDes": "Updated actual description",
                "_id": "6783d328ba4cc2ad5ba7de7d"
            }
        ],
        "whyTrustUs": "<p>Sofas play a vital role in defining the character and utility of a room. They are the furniture we retreat to after a long day, the space where we gather with loved ones, and the backdrop for countless memories. A well-chosen sofa enhances the ambiance of a home, making it more inviting and comfortable. Beyond their aesthetic appeal, sofas are a practical investment that contributes to overall well-being by providing ergonomic support and promoting relaxation.<br><br>Moreover, sofas have a unique ability to balance form and function. They can act as focal points, drawing attention and anchoring a room’s layout, or as understated pieces that complement other decor elements. Their versatility makes them indispensable in both traditional and contemporary interiors.</p>",
        "whoIsFor": "<p>Sofas have evolved over time, from simple wooden benches with cushions to luxurious, ergonomic designs that cater to modern lifestyles. They reflect cultural trends, technological advancements, and individual tastes, offering an array of options for every kind of homeowner. In this extensive guide, we’ll delve into the various types of sofas, their materials, uses, and how to choose the perfect one for your living space.<br>The sofa, often referred to as the centerpiece of the living room, is more than just a piece of furniture. It serves as a hub for relaxation, a statement of style, and a gathering spot for family and friends. From cozy apartments to sprawling homes, the sofa is an essential element that brings functionality and aesthetics together. With countless designs, materials, and configurations available, choosing the right sofa can feel overwhelming, but it is a rewarding process that significantly impacts the comfort and appearance of your home.<br><br>A sofa is one of the most important pieces of furniture in any home. It provides a place to sit, relax, and spend time with family or friends. Whether you're watching TV, reading a book, or simply enjoying a quiet evening, a good sofa makes all the difference in creating a comfortable space.</p>",
        "sources": "<p>A sofa is much more than a piece of furniture; it’s an expression of style and a haven of comfort. By considering your space, lifestyle, and personal preferences, you can find a sofa that not only elevates your home but also becomes a cherished part of your daily life. Whether you’re drawn to the classic charm of a Chesterfield or the sleek lines of a modern sectional, the perfect sofa is out there waiting to transform your living space.<br>The history of sofas dates back to ancient civilizations. From the opulent divans of the Ottoman Empire to the classic settees of Victorian England, sofas have evolved in design and functionality. Today, they are an integral part of modern living, catering to diverse tastes and lifestyles.</p>",
        "menu": "furniture",
        "subMenu": "sofas",
        "createdAt": "2025-01-12T13:48:40.971Z",
        "updatedAt": "2025-01-12T14:35:20.799Z",
        "__v": 0,
        "id": "6783c83807b42a11236a097f"
    }
}
```
