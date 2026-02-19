const mergeWords = (string) => (nextString) => {
  return (nextString === undefined) ? string : mergeWords(string + ' ' + nextString)
};




