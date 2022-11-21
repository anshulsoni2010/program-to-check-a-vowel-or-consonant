var ch;
function checkVowel()
{
  ch = document.getElementById("char").value;
  if(ch)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))
    {
      if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
        document.getElementById("res").innerHTML = "a Vowel";
      else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
        document.getElementById("res").innerHTML = "a Vowel";
      else
        document.getElementById("res").innerHTML = "a Consonant";
    }
    // else
    //   document.getElementById("res").innerHTML = "neither Vowel nor Consonant";
    else
    document.getElementById("res").innerHTML = "a number neither a Vowel nor a Constant";
  }
}