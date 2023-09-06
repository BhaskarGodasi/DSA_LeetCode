function calling() {
  var h = 4;
  for(let i=1;i<=h;i++){

      let count =0;

          for(let j=1;j<=h;j++){
             let num =j*j
             if(num>10){
              num =0
             }
              document.write(num)

              if(i==j){
                  break;
              }

           }

      for(let j=i-1;j>0;j--){

          document.write(j*j )

       }

       document.write("<br></br>")

  }

  for (let i = h - 1; i >= 1; i--) {
    for (let j = 1; j <= h; j++) {
      document.write(j * j);
      if (i == j) {
        break;
      }
    }

    for (let j = i - 1; j > 0; j--) {
      document.write(j * j);
    }

    document.write("<br></br>");
  }
}
calling();
