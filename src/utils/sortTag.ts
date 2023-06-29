export default function sortTag(tagArr: string[]) {
  tagArr.sort((a: string, b: string) => {
    const aStr: boolean = /^\d+/.test(a);
    const bStr: boolean = /^\d+/.test(b);
    const aResult = aStr ? -1 : 0;

    return bStr ? 1 : aResult;
  });
}
