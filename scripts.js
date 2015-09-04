for (var i = 0; i < students.length; i += 1){
  for (var key in students[i]){
    document.write(key + ": " + students[i][key] + "<br> <br>");
  }
}