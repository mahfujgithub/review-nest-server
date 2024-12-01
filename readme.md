## Title: Keep it short and impactful.
# Description: Briefly explain what the project is, its purpose, and key features.



###  Menu Management API
# This API serves as the backend for a menu management system where administrators can create, read, update, and delete menu items.

## Create Menu
# Creates a new menu item. Requires category and subcategory.

# Request
{
  "category": "Desserts",
  "subcategory": "Cakes",
}

# Response
{
  "success": true,
  "message": "Menu created successfully!",
  "data": {
    "_id": "64fc123abc456",
    "category": "Desserts",
    "subcategory": "Cakes",
  }
}


## Get All Menu
# Retrieves all menu items. Accessible only by admin users.

# Request

# Response
{
  "success": true,
  "message": "Menu Get Successfully",
  "data": [
    {
      "_id": "64fc123abc456",
      "category": "Desserts",
      "subcategory": "Cakes",
      "items": ["Chocolate Cake", "Cheesecake"]
    },
    {
      "_id": "64fc789def101",
      "category": "Drinks",
      "subcategory": "Juices",
      "items": ["Orange Juice", "Apple Juice"]
    }
  ]
}


## Get Single Menu
# Fetches details of a specific menu item by its ID.

# Request

# Response
{
  "success": true,
  "message": "Get Single Menu Successfully",
  "data": {
    "_id": "64fc123abc456",
    "category": "Desserts",
    "subcategory": "Cakes",
    "items": ["Chocolate Cake", "Cheesecake"]
  }
}


## Update Menu
# Updates a menu item. Requires the updated details in the request body.

# Request
{
  "category": "Beverages",
  "subcategory": "Coffee",
}

# Response
{
  "success": true,
  "message": "Update Single Menu Successfully",
  "data": {
    "_id": "64fc123abc456",
    "category": "Beverages",
    "subcategory": "Coffee",
  }
}


## Delete Menu
# Deletes a menu item permanently.

# Request
{
  "success": true,
  "message": "Delete Single Menu Successfully",
}


## Validation
# Zod Schema: Ensures that all input data matches the required structure.

# Example
export const createMenuZodSchema = z.object({
  body: z.object({
    category: z.string().example("Category is required"),
    subcategory: z.string().example("Subcategory is required"),
  }),
});

# Request Example
{
  "category": "Food",
  "subcategory": "Desserts"
}





### Stuff Management API
# This API allows administrators to manage "Stuff" records, providing operations like retrieving, updating, and deleting data. It is secured with role-based access control and supports pagination and filtering for data retrieval.

## Get All Stuff
# Retrieve all stuff with support for pagination and filtering.

# Authorization: Requires Admin Role.
# Query Parameters (Optional):
* page: Current page number.
* limit: Number of items per page.
* Filterable fields: Based on stuffFilterableFields.

# Request

# Response
{
  "success": true,
  "message": "Admins Retrieved successfully!",
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  },
  "data": [
    {
      "_id": "12345",
      "name": "John Doe",
      "role": "Admin"
    }
  ]
}


## Get Single Stuff
# Retrieve details of a single stuff record.

# Request

# Response
{
  "success": true,
  "message": "Admin Retrieved successfully!",
  "data": {
    "_id": "12345",
    "name": "John Doe",
    "role": "Admin"
  }
}

## Update Stuff
# Validation: Email updates are not allowed.

# Request
{
  "name": {
    "first": "Jane",
    "last": "Doe"
  }
}

# Response
{
  "success": true,
  "message": "Admin Updated successfully!",
  "data": {
    "_id": "12345",
    "name": "Jane Doe",
    "role": "Admin"
  }
}

## Validation Schema For Updaating Stuff
# The schema validates the request body for updating a "Stuff" entity.
* name: An object that optionally contains:
* firstName (string)
* lastName (string)
* middleName (string)
* email: Optional, must be a valid email format.
* image: Optional, string for storing the image URL or path.
* contact: Optional, string for storing the contact number.
* emergencyContact: Optional, string for emergency contact.
* address: Optional, string for the address.

# Valid Request Example
{
  "name": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "image": "https://example.com/image.jpg",
  "contact": "1234567890",
  "emergencyContact": "0987654321",
  "address": "123 Street Name, City, Country"
}



## Delete Stuff
# Authorization: Requires Admin Role.

# Request

# Response
{
  "success": true,
  "message": "Admin Deleted successfully!",
}
