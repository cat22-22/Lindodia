let truncateString = function(str, num)
{
    if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      } 
}

writeOutput(truncateString("Hoje está um lindo dia", 8));