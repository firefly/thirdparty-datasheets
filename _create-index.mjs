import fs from "fs"

function repeat(c, count) {
  while (c.length < count) {
    c += c;
  }
  return c.substring(0, count);
}

const header = fs.readFileSync("./_header.md").toString().trim().split("\n");
const footer = fs.readFileSync("./_footer.md").toString().trim().split("\n");
const data = JSON.parse(fs.readFileSync("./data.json").toString());

const output = [ ];

output.push(...header);

for (const { name, tag } of data.categories) {
  const getLink = (info, _name) => {
    const name = _name || info.name;

    const link = [ ];
    if (info.filename) {
      link.push(`[${ name }](./${ tag }/${ info.filename })`);
    } else {
      if (!info.url) { return ""; }
      link.push(name);
    }

    if (info.url) {
      link.push(` <sup>[[external](${ info.url })]</sup>`);
    }

    return link.join("");
  };

  output.push("", "");
  output.push(name);
  output.push(repeat("-", name.length));
  output.push("");
  data.parts.sort((a, b) => a.name.localeCompare(b.name));
  for (const part of data.parts) {
    if (part.cat !== tag) { continue; }
    part.done = true;
    output.push(`- **${ part.name }** - *${ part.descr }*`);

    const datasheet = getLink(part, "datasheet");
    if (datasheet) { output.push(`  - ${ datasheet }`); }
    if (part.urls) {
      for (const url of part.urls) {
        const line = getLink(url);
        if (!line) { continue; }
        output.push(`  - ${ line }`);
      }
    }

    if (part.mpn) {
      output.push(`  - LCSC Part ${ part.mpn } <sup>[[JLCPCB](https://jlcpcb.com/partdetail/${ part.mpn })]</sup>`);
    }
  }
}

output.push("", "");
output.push(...footer);

fs.writeFileSync("./README.md", output.join("\n"));

for (const part of data.parts) {
  if (!part.done) {
    console.log(`Warning: ${ part.name } was not output`);
  }
}
