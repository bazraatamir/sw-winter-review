
library-mvc-app/
│
├── server.js                    ← серверийн эхлэл
├── .env
├── .env.example
├── package.json
├── .gitignore
│
├── config/
│   ├── db.js                    ← өгөгдлийн сан холболт
│   └── auth.js                  ← JWT тохиргоо
│
├── models/
│   ├── Member.js                ← Гишүүн
│   ├── Book.js                  ← Ном
│   ├── Author.js                ← Зохиолч
│   ├── BookAuthor.js            ← Ном_Зохиолч (холбоос)
│   ├── Loan.js                  ← Зээлдэлт
│   └── Staff.js                 ← Ажилтан
│
├── controllers/
│   ├── memberController.js
│   ├── bookController.js
│   ├── authorController.js
│   ├── loanController.js
│   ├── staffController.js
│   └── authController.js        ← нэвтрэх/гарах
│
├── routes/
│   ├── memberRoutes.js          ← /api/members
│   ├── bookRoutes.js            ← /api/books
│   ├── authorRoutes.js          ← /api/authors
│   ├── loanRoutes.js            ← /api/loans
│   ├── staffRoutes.js           ← /api/staff
│   ├── authRoutes.js            ← /api/auth
│   └── index.js                 ← бүгдийг нэгтгэх
│
├── middlewares/
│   ├── authMiddleware.js        ← JWT шалгах
│   ├── roleMiddleware.js        ← үүрэг шалгах
│   └── errorHandler.js
│
└── utils/
    ├── fineCalculator.js        ← торгууль тооцох
    └── validators.js

    