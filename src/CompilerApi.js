import atob from "atob";

const CompilerApi = async (lang_code, src, display) => {
  console.log(src);
  const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions", {
    method: "POST",
    headers: {
      "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      "x-rapidapi-key": "883b2b94f7mshb6cabc0f6b08030p178b9fjsn66664f126662", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      source_code: src,
      stdin: null,
      language_id: lang_code,
    }),
  });

  const jsonResponse = await response.json();
  let jsonGetSolution = {};

  if (jsonResponse.token) {
    let url = `https://judge0-ce.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;
    const getSolution = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        "x-rapidapi-key": "883b2b94f7mshb6cabc0f6b08030p178b9fjsn66664f126662", // Get yours for free at https://rapidapi.com/judge0-official/api/judge0-ce/
        "content-type": "application/json",
      },
    });
    jsonGetSolution = await getSolution.json();
  }

  if (jsonGetSolution.stdout) {
    console.log("Output :", atob(jsonGetSolution.stdout));
    display(atob(jsonGetSolution.stdout));
  } else if (jsonGetSolution.stderr) {
    display("*** SOME ERROR OCCURRED ***");
  } else {
    console.log("Compile error :", jsonGetSolution.compile_output);
    display("*** COMPILATION ERROR ***");
  }
};

export default CompilerApi;
