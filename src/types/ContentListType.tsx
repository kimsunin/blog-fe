type ContentListType = {
  year: string;
  content: SubContentType;
}[];

type SubContentType = { id: number; title: string; date: string, img_url: string | null; }[];
