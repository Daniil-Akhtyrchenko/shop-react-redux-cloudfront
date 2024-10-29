import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { products } from "../mock-data/products";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log(`HTTP trigger function processed a request for ${req.url}`);

  const {
    params: { productId },
  } = req;

  const product = products.find((item) => item.id === productId);

  if (product) {
    context.res = {
      status: 200,
      body: product,
    };
  } else {
    context.res = {
      status: 404,
      body: `Product with ID ${productId} not found`,
    };
  }
};

export default httpTrigger;
