/*
  a special method:
  Firebase realtime database always returns an object, so we need to "transform" that object into an array,.
  The id of an alement is automatically added as the "key" of the item in the FB DB upon creation
*/
const getArrayFromObject = (productObject: object) => productObject ? Object.entries(productObject)
  .map(([key, value]) => {
    return {
      id: key,
      ...value,
    }
  }) : [];

const getEnumKeyArray = (e: any) => {
  return (Object.keys(e) as Array<keyof typeof e>).map((key) => key.toString().toLowerCase());
}

export {
  getArrayFromObject,
  getEnumKeyArray
};