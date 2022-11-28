export function useSizeConverter () {

  return {
    humanizeSize(bytes: number, decimals = 2) {
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const finalSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

      return {
        humanized: finalSize +' ' + sizes[i],
        finalSize
      };
    }
  }
}