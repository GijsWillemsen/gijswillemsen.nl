async function testUrls() {
  const rootRes = await fetch("https://resume.gijswillemsen.nl/");
  const rootHtml = await rootRes.text();
  console.log("ROOT HTML MATCHES SRC?:", rootHtml.includes("/src/main.tsx"));
  
  const distRes = await fetch("https://resume.gijswillemsen.nl/dist/index.html");
  if (distRes.ok) {
    const distHtml = await distRes.text();
    console.log("DIST HTML EXISTS?:", distHtml.includes("/assets/index-"));
  } else {
    console.log("DIST HTML NOT FOUND:", distRes.status);
  }
}
testUrls();
