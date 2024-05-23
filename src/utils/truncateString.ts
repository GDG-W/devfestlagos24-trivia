export const truncateString = (str : string | undefined, maxLength : number) =>  {
    if(str){
      if (str.length <= maxLength) {
        return str;
      } else {
        return str.slice(0, maxLength) + "...";
      }
    }else{
      return "";
    }
  }