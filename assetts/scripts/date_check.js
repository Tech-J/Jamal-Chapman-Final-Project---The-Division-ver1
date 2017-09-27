    /* This Function Grabs The Input For The Birthday and Check it to verify That you Are 17 and older*/
    var month2, day2, year2;
    function submit() {
      setValues()
      var a
      a = new Date();
      var month = a.getMonth() + 1;
      var day = a.getDate();
      var year = a.getFullYear();
      var todayDate = new Date(month + '/' + day + '/' + (year - 17))
      var enteredDate = new Date(month2 + '/' + day2 + '/' + year2)
      if (enteredDate.getTime() <= todayDate.getTime()) {
        alert("Right");
        location.replace('./Home.html')
      } else {
        alert("Try Again");
        document.getElementById("month").value="";
        document.getElementById("day").value="";
        document.getElementById("year").value="";
      }
    }
    function setValues() {
      month2 = Number(document.getElementById("month").value);
      day2 = Number(document.getElementById("day").value);
      year2 = Number(document.getElementById("year").value);
    }
