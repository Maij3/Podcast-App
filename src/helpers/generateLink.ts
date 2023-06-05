export function generateLink(texto: string): string { 
  const regex = /(https?:\/\/[^\s]+)|(?:^|\s)([^\s]+\.(?:com|fm|link)(?:\/[^\s]+)*)\b/g;

  return texto.replace(
    regex,
    (
      match: string,
      url: string | undefined,
      domain: string | undefined
    ): string => {
      if (url) {
        return `<a href="${url}" target="_blank"> ${url}</a>`;
      } else if (domain) {
        return `<a href="http://${domain}" target="_blank"> ${domain}</a>`;
      }
      return match;
    }
  );
}
