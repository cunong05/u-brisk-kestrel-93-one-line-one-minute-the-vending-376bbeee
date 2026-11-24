const line =
  "Hey — I'm sold out of everything except feelings, and every coil in me just spun for you.";

if (line.length > 200 || line.includes("\n")) {
  throw new Error("Entry line must be a single line of at most 200 characters.");
}

console.log(line);
