# Product & Employee Management API (Lab Task 1)

| Field   | Value                  |
|---------|------------------------|
| Name    | AUNGKON CHANDRA DATTA  |
| ID      | 23-51903-2             |
| Section | D                      |

A NestJS REST API with full CRUD for **Products** and **Employees**, using TypeORM and PostgreSQL. The database schema is created with migrations (`synchronize` is off).

## Tech stack
NestJS, TypeORM, PostgreSQL, class-validator, pnpm

## Prerequisites
- Node.js 22 or newer
- pnpm (`npm install -g pnpm`)
- PostgreSQL running on port 5432

## Database setup
1. Open DBeaver (or psql) and connect as the `postgres` user.
2. Create the database:
   ```sql
   CREATE DATABASE product_db;
   ```

## Installation and run
```bash
# 1. install dependencies
pnpm install
pnpm approve-builds        # select all packages, then confirm

# 2. create your local env file and set DB_PASSWORD
copy .env.example .env     # on macOS/Linux: cp .env.example .env

# 3. create the tables from the migration
pnpm migration:run

# 4. start the app (http://localhost:5001)
pnpm start:dev
```

The initial migration file is in `src/database/migrations/`. It was generated with:
```bash
pnpm migration:generate src/database/migrations/InitialSchema
```

Swagger docs: http://localhost:5001/api

## Endpoints

### Products
| Method | Endpoint        | Behavior                          |
|--------|-----------------|-----------------------------------|
| POST   | /products       | Create and save a product         |
| GET    | /products       | Return all saved products         |
| GET    | /products/:id   | Return the product with the ID    |
| PATCH  | /products/:id   | Update the product with the ID    |
| DELETE | /products/:id   | Delete the product with the ID    |

Product fields: `id`, `name`, `category`, `price`, `quantity`

### Employees
| Method | Endpoint          | Behavior                          |
|--------|-------------------|-----------------------------------|
| POST   | /employees        | Create and save an employee       |
| GET    | /employees        | Return all saved employees        |
| GET    | /employees/:id    | Return the employee with the ID   |
| PATCH  | /employees/:id    | Update the employee with the ID   |
| DELETE | /employees/:id    | Delete the employee with the ID   |

Employee fields: `id`, `name`, `email`, `phone`, `password` (dummy), `age`, `yearsOfWorking`

## Example request bodies
```json
// POST /products
{ "name": "Rice 5kg", "category": "Grocery", "price": 450.5, "quantity": 20 }

// POST /employees
{ "name": "Rahim Uddin", "email": "rahim@mail.com", "phone": "01711000000",
  "password": "dummy123", "age": 28, "yearsOfWorking": 4 }
```

## Screenshots
Postman screenshots for every operation are in the `screenshots/` folder.
