const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const ProductRoutes = require("./routes/productRoutes");
const PurchasesRoutes = require("./routes/purchaseRoutes");

app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/purchases", PurchasesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening  the server at port ${PORT}`));
