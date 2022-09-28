/* global Word, require */

export async function getPars() {
  await Word.run(async (context) => {
    const paragraphs = context.document.body.paragraphs;
    paragraphs.load("text");
    await context.sync();

    let text = [];
    paragraphs.items.forEach((item) => {
      let paragraph = item.text.trim();
      if (paragraph) {
        paragraph.split(" ").forEach((term) => {
          let currentTerm = term.trim();
          if (currentTerm) {
            text.push(currentTerm);
          }
        });
      }
    });

    await context.sync();
    console.log(text);
  });
}

export async function debugCorrectDocument() {
  await Word.run(async (context) => {
    const paragraphs = context.document.body.paragraphs;
    paragraphs.load("text");
    await context.sync();

    let pars = [];
    console.log("pars, empty:", pars);
    paragraphs.items.forEach((item) => {
      let paragraph = item.text;
      if (paragraph) {
        pars.push(String(paragraph));
      }
    });

    console.log("pars, filled:", pars);

    const text = pars.join("\n");

    console.log(text);
    // Make a POST request to Yfirlestur.is with a JSON payload.
    const data = text;
    const options = {
      method: "post",
      body: data,
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      scheme: "https",
      headers: {
        "Content-Type": "text/plain",
      },
    };
    console.log("request options:", options);
    console.log("sending data");
    const response = await fetch("https://yfirlestur.is/correct.api", options);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    console.log(await response.json());

    console.log("Response received");
    console.log(response);
  });
}
