function check_leapyear(){
      let year=document.getElementById("year").value;
      if ((year%400===0) && (year%400===0) || (year%100!==0)) {
        alert(year +" Is a leap year..");}
      else{
        alert(year + " Is not a leap year..");

      }
    }
