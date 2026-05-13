# Library Management System — REST API Documentation

---

## Ерөнхий мэдээлэл

```
Base URL      : http://localhost:5000/api
Content-Type  : application/json
Auth          : Bearer Token (JWT)
```

---

## Authentification

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| POST | `/auth/login` | Нэвтрэх | ✗ |
| POST | `/auth/logout` | Гарах | ✓ |
| GET | `/auth/me` | Өөрийн мэдээлэл | ✓ |

**POST** `/auth/login`
```json
// Request
{
  "username": "admin",
  "password": "123456"
}

// Response 200
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Болд",
    "role": "librarian"
  }
}

// Response 401
{
  "message": "Нэвтрэх нэр эсвэл нууц үг буруу байна"
}
```

---

## Гишүүн `/api/members`

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| GET | `/members` | Бүх гишүүдийн жагсаалт | ✓ |
| GET | `/members/:id` | Нэг гишүүний мэдээлэл | ✓ |
| POST | `/members` | Гишүүн нэмэх | ✓ |
| PUT | `/members/:id` | Гишүүн засах | ✓ |
| DELETE | `/members/:id` | Гишүүн устгах | ✓ |
| GET | `/members/:id/loans` | Гишүүний зээлдэлтийн түүх | ✓ |

**GET** `/members?page=1&limit=10&search=Болд`
```json
// Response 200
{
  "data": [
    {
      "id": 1,
      "name": "Болд Баатар",
      "phone": "99001122",
      "email": "bold@mail.com",
      "registered_date": "2024-01-15"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

**POST** `/members`
```json
// Request
{
  "name": "Болд Баатар",
  "phone": "99001122",
  "email": "bold@mail.com"
}

// Response 201
{
  "message": "Гишүүн амжилттай бүртгэгдлээ",
  "data": {
    "id": 1,
    "name": "Болд Баатар",
    "phone": "99001122",
    "email": "bold@mail.com",
    "registered_date": "2025-05-13"
  }
}
```

---

## Ном `/api/books`

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| GET | `/books` | Бүх номын жагсаалт | ✓ |
| GET | `/books/:id` | Нэг номын мэдээлэл | ✓ |
| POST | `/books` | Ном нэмэх | ✓ |
| PUT | `/books/:id` | Ном засах | ✓ |
| DELETE | `/books/:id` | Ном устгах | ✓ |
| GET | `/books/:id/authors` | Номын зохиолчид | ✓ |

**GET** `/books?page=1&limit=10&search=Монгол`
```json
// Response 200
{
  "data": [
    {
      "id": 1,
      "title": "Монгол нууц товчоо",
      "isbn": "978-99929-0-000-0",
      "year": 1990,
      "copies": 5,
      "authors": ["Лувсанданзан"]
    }
  ],
  "pagination": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

**POST** `/books`
```json
// Request
{
  "title": "Монгол нууц товчоо",
  "isbn": "978-99929-0-000-0",
  "year": 1990,
  "copies": 5,
  "author_ids": [1, 2]
}

// Response 201
{
  "message": "Ном амжилттай нэмэгдлээ",
  "data": {
    "id": 1,
    "title": "Монгол нууц товчоо",
    "isbn": "978-99929-0-000-0",
    "year": 1990,
    "copies": 5
  }
}
```

---

## Зохиолч `/api/authors`

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| GET | `/authors` | Бүх зохиолчдын жагсаалт | ✓ |
| GET | `/authors/:id` | Нэг зохиолчийн мэдээлэл | ✓ |
| POST | `/authors` | Зохиолч нэмэх | ✓ |
| PUT | `/authors/:id` | Зохиолч засах | ✓ |
| DELETE | `/authors/:id` | Зохиолч устгах | ✓ |
| GET | `/authors/:id/books` | Зохиолчийн номнууд | ✓ |

**POST** `/authors`
```json
// Request
{
  "name": "Лувсанданзан",
  "nationality": "Монгол"
}

// Response 201
{
  "message": "Зохиолч амжилттай нэмэгдлээ",
  "data": {
    "id": 1,
    "name": "Лувсанданзан",
    "nationality": "Монгол"
  }
}
```

---

## Зээлдэлт `/api/loans`

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| GET | `/loans` | Бүх зээлдэлтийн жагсаалт | ✓ |
| GET | `/loans/:id` | Нэг зээлдэлтийн мэдээлэл | ✓ |
| POST | `/loans` | Ном зээлдүүлэх | ✓ |
| PUT | `/loans/:id/return` | Ном буцаах | ✓ |
| GET | `/loans/overdue` | Хугацаа хэтэрсэн зээлдэлтүүд | ✓ |

**POST** `/loans` — Ном зээлдүүлэх
```json
// Request
{
  "member_id": 1,
  "book_id": 3,
  "due_date": "2025-06-13"
}

// Response 201
{
  "message": "Ном амжилттай зээлдүүллээ",
  "data": {
    "id": 10,
    "member_id": 1,
    "book_id": 3,
    "loan_date": "2025-05-13",
    "due_date": "2025-06-13",
    "returned_date": null,
    "fine": 0
  }
}

// Response 400 — хувь хүрэлцэхгүй
{
  "message": "Номын хувь дууссан байна"
}
```

**PUT** `/loans/:id/return` — Ном буцаах
```json
// Response 200
{
  "message": "Ном амжилттай буцаагдлаа",
  "data": {
    "id": 10,
    "returned_date": "2025-05-13",
    "fine": 2000
  }
}
```

**GET** `/loans/overdue`
```json
// Response 200
{
  "data": [
    {
      "loan_id": 5,
      "member": "Болд Баатар",
      "book": "Монгол нууц товчоо",
      "due_date": "2025-04-01",
      "overdue_days": 42,
      "fine": 4200
    }
  ]
}
```

---

## Ажилтан `/api/staff`

| Method | Endpoint | Тайлбар | Auth |
|--------|----------|---------|------|
| GET | `/staff` | Бүх ажилтны жагсаалт | ✓ admin |
| GET | `/staff/:id` | Нэг ажилтны мэдээлэл | ✓ admin |
| POST | `/staff` | Ажилтан нэмэх | ✓ admin |
| PUT | `/staff/:id` | Ажилтан засах | ✓ admin |
| DELETE | `/staff/:id` | Ажилтан устгах | ✓ admin |

**POST** `/staff`
```json
// Request
{
  "name": "Нарандэлгэр",
  "role": "librarian",
  "username": "naranaa",
  "password": "Pass@1234"
}

// Response 201
{
  "message": "Ажилтан амжилттай нэмэгдлээ",
  "data": {
    "id": 2,
    "name": "Нарандэлгэр",
    "role": "librarian",
    "username": "naranaa"
  }
}
```

---

## Алдааны формат

```json
// 400 Bad Request
{ "message": "Талбар дутуу байна", "errors": ["name шаардлагатай"] }

// 401 Unauthorized
{ "message": "Нэвтрэх шаардлагатай" }

// 403 Forbidden
{ "message": "Эрх хүрэхгүй байна" }

// 404 Not Found
{ "message": "Өгөгдөл олдсонгүй" }

// 500 Server Error
{ "message": "Серверийн алдаа гарлаа" }
```

---

## HTTP Status Кодууд

| Код | Утга |
|-----|------|
| 200 | Амжилттай |
| 201 | Амжилттай үүсгэлээ |
| 400 | Буруу хүсэлт |
| 401 | Нэвтрэх шаардлагатай |
| 403 | Эрх хүрэхгүй |
| 404 | Олдсонгүй |
| 500 | Серверийн алдаа |

---

Дараагийн алхам: `server.js` болон `config/db.js` кодыг эхлэх үү?