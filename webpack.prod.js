import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  devtool: "source-map", // Safer, optimized source maps for production
});