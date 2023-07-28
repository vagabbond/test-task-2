export type Note = {
 name: string;
 content: string;
 id: number;
 creationTime: string;
 datesMentioned: string;
 category: string;
 archived: boolean;
};

export type NotesState = {
 notes: Note[];
};
