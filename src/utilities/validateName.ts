const validateName = (name:string) => {
    const clearName = name.trim()
    if(clearName.length > 2 && clearName.length < 21){
      return true
    }
    return false
  }

  export default validateName