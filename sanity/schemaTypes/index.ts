import { type SchemaTypeDefinition } from "sanity";

import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { customerType } from "./customerType";
import { orderType } from "./orderType";
import { reviewType } from "./review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType, customerType, orderType, reviewType],
};
