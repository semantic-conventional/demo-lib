const { colors } = require("./index")

if (!Array.isArray(colors)) {
  throw new Error("colors is not an array")
}

for (const color of colors) {
  if (typeof color.name !== "string" || typeof color.code !== "string") {
    throw new Error("invalid color: " + JSON.stringify(color))
  }
}