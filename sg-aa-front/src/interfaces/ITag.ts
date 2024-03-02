export default interface ITag {
  id: number;
  attributes: {
    tag: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export const TAG_COLORS : ('red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink')[] = [
  'green' ,'yellow' , 'red' , 'pink',  'purple' ,'indigo' , 'blue'
  ]