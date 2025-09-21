# KG Store

A full-stack product management application for managing product inventory with complete CRUD functionality. Currently featuring a robust backend API built with Node.js, Express, and MongoDB, with plans for a modern React frontend interface.

## 🎯 Project Vision

KG Store aims to be a comprehensive product management solution with the following planned features:

**Current Status (Backend Complete):**

- ✅ RESTful API with Express routers
- ✅ MongoDB integration with Mongoose
- ✅ Full CRUD operations for products
- ✅ Product model with name, price, and image fields
- ✅ Error handling and validation

**Planned Frontend Features:**

- 🔄 Modern React interface with responsive design
- 🔄 Product catalog with grid/list views
- 🔄 Interactive forms for adding/editing products
- 🔄 Image upload and preview functionality
- 🔄 Search and filter capabilities
- 🔄 Admin dashboard for inventory management
- 🔄 User authentication and authorization

## 🚀 Current Features (Backend)

- **RESTful API**: Complete backend API for product management
- **Database Integration**: MongoDB with Mongoose ODM
- **CRUD Operations**: Create, Read, Update, Delete products
- **Data Validation**: Server-side validation for product fields
- **Error Handling**: Comprehensive error responses
- **Scalable Architecture**: Express routers for organized code structure

## 🛠️ Technologies Used

**Frontend (Planned):**

- React
- HTML5 & CSS3
- JavaScript (ES6+)

**Backend (Complete):**

- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## 📁 Project Structure

```
kg-store/
├── backend/              # Node.js & Express backend (COMPLETE)
│   ├── routes/          # Express routers
│   ├── models/          # MongoDB models
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/            # React frontend (PLANNED)
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/khagendra62/kg-store.git
cd kg-store
```

### 2. Backend Setup

```bash
cd backend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Start the Backend Server

```bash
npm run server
```

The API will be available at `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/products`     | Get all products           |
| GET    | `/api/products/:id` | Get product by ID          |
| POST   | `/api/products`     | Add a new product          |
| PUT    | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product           |

### Example API Usage

**Get All Products:**

```bash
GET http://localhost:5000/api/products
```

**Add New Product:**

```bash
POST http://localhost:5000/api/products
Content-Type: application/json

{
  "name": "Product Name",
  "price": 29.99,
  "image": "https://example.com/image.jpg"
}
```

## 🎯 Current Usage (Backend API)

The backend provides a complete RESTful API for product management. You can test the endpoints using tools like Postman, Insomnia, or curl:

1. **Get All Products**: Retrieve the complete product list
2. **Get Single Product**: Fetch detailed product information by ID
3. **Add Products**: Create new products with validation
4. **Update Products**: Modify existing product details
5. **Delete Products**: Remove products from the database

All data is persisted in MongoDB with proper error handling and validation.

## 🚀 Future Frontend Plans

Once the React frontend is implemented, users will be able to:

- Browse products in an intuitive interface
- Add/edit products through user-friendly forms
- Upload and manage product images
- Search and filter products
- Manage inventory through an admin dashboard

## 🏗️ Backend Architecture

The Express.js backend follows a modular structure:

- **Routes**: RESTful API endpoints with Express routers
- **Models**: MongoDB schemas using Mongoose ODM
- **Controllers**: Business logic and request handling
- **Middleware**: Error handling and request validation
- **Database**: MongoDB integration with connection management

## 🚀 Deployment

The application backend can be deployed to platforms like:

- **Backend**: Heroku, Railway, DigitalOcean, AWS
- **Database**: MongoDB Atlas (recommended for production)

Frontend deployment options (when completed):

- **Frontend**: Vercel, Netlify, GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using React, Express, and MongoDB**
