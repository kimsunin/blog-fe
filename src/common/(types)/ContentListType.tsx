type ContentListType = {
  year: string;
  content: SubContentType;
}[];

type SubContentType = { id: number; title: string; data: string }[];
