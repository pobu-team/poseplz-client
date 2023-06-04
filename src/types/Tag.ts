interface Tag {
  tagId: string;
  type: string;
  name: string;
  selectorName: string;
  selectorDisplayOrder?: number;
  emojiText?: string;
  emojiImageUrl?: string;
  description?: string;
}

export default Tag;
