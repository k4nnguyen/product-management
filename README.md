# 🛍️ Product Management App

Một ứng dụng quản lý sản phẩm đơn giản xây dựng bằng **Node.js**, **Express**, **MongoDB** và **Pug**. Giao diện chia làm hai phần: người dùng và quản trị viên.

---

## 🚀 Chức năng chính

- Trang client: hiển thị danh sách sản phẩm
- Trang admin: quản lý sản phẩm, dashboard
- Tách biệt rõ ràng giữa route, controller, view

---

## 📁 Cấu trúc thư mục

```plaintext
product-management/
├── .gitignore                  # Bỏ qua các file/thư mục không đẩy lên GitHub (vd: node_modules, .env)
├── index.js                   # File khởi chạy chính của ứng dụng
├── package.json               # Khai báo thông tin dự án, dependencies và script
├── package-lock.json          # Ghi lại phiên bản chính xác của các package đã cài
├── tree.txt                   # File mô tả cấu trúc thư mục (tự sinh ra)

├── config/                    # Các cấu hình hệ thống và kết nối database
│   ├── database.js            # Kết nối MongoDB (thường là Mongoose)
│   └── system.js              # Các biến cấu hình chung (PORT, tên app,...)

├── controllers/               # Logic xử lý cho từng route (admin và client)
│   ├── admin/
│   │   ├── dashboard.controller.js  # Xử lý hiển thị dashboard admin
│   │   └── products.controller.js   # Quản lý sản phẩm bên admin
│   └── client/
│       ├── home.controller.js      # Xử lý trang chủ client
│       └── products.controller.js  # Hiển thị danh sách sản phẩm client

├── models/
│   └── product.model.js      # Mongoose schema cho sản phẩm

├── public/                   # Tài nguyên tĩnh (CSS, JS, hình ảnh, ...)
│   ├── admin/
│   │   ├── css/style.css     # Style riêng cho giao diện admin
│   │   └── js/script.js      # Script riêng cho admin
│   ├── css/style.css         # Style dùng chung (nếu có)
│   ├── js/script.js          # JS dùng chung
│   └── logo/                 # Chứa các file logo SVG
│       ├── ct_logo.svg
│       └── logo.svg

├── routes/                   # Định nghĩa các endpoint cho client và admin
│   ├── admin/
│   │   ├── dashboard.route.js  # Định nghĩa route cho dashboard admin
│   │   ├── index.route.js      # Route chính của admin
│   │   └── products.route.js   # Route quản lý sản phẩm admin
│   └── client/
│       ├── home.route.js       # Route trang chủ client
│       ├── index.route.js      # Route chính của client
│       └── products.route.js   # Route hiển thị sản phẩm client

└── views/                    # Giao diện viết bằng Pug (client và admin)
    ├── admin/
    │   ├── layouts/
    │   │   └── default.pug     # Layout khung chính của admin
    │   ├── mixins/             # Các mixin Pug tái sử dụng cho admin
    │   ├── pages/
    │   │   ├── dashboard/index.pug  # Trang dashboard admin
    │   │   └── products/index.pug   # Trang danh sách sản phẩm admin
    │   └── partials/
    │       ├── header.pug      # Header dùng chung trong admin
    │       └── sider.pug       # Sidebar menu trái
    └── client/
        ├── layouts/
        │   └── default.pug     # Layout khung chính client
        ├── mixins/
        │   └── box-head.pug    # Mixin cho phần tiêu đề hộp
        ├── pages/
        │   ├── home/index.pug  # Trang chủ client
        │   └── products/index.pug  # Trang danh sách sản phẩm client
        └── partials/
            ├── footer.pug      # Footer dùng chung
            └── header.pug      # Header dùng chung
