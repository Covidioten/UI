var jsonStr = import("JSON-Example.json");

var json_parsed = $.parseJSON(jsonStr);

var items = json_parsed.Items;
for (var i = 0; i < items.length; ++i) {
  console.log("Item #" + i);
  for (var name in items[i]) {
    console.log(name + "=" + items[i][name]);
  }
}
