export const generateLink = (text: string) => {
  const regex = /\b((?:https?:\/\/|www\.)[^\s]+)/g;
  return text.replace(regex, function(match) {
    if (match.startsWith('http://') || match.startsWith('https://')) {
      return '<a href="' + match + '" target="_blank">' + match + '</a>';
    } else {
      return '<a href="http://' + match + '" target="_blank">' + match + '</a>';
    }
  });
};
