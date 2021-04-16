let writeOutput = function(text)
{
    document.write(`<h1>${text}</h1>`)
}

let truncateString = function(str, num)
{
    if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      } 
}


writeOutput(truncateString("Hoje está um lindo dia", 10));

let titleCase = function(str)
{
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
}
titleCase("Hoje está um lindo dia");

writeOutput(titleCase("Hoje está um lindo dia"));


