type NoteListType = {
  year: string;
  content: ContentType;
}[];

type ContentType = { id: number; title: string; data: string }[];
