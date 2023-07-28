export type FormValues = {
 name: string;
 content: string;
 category: categories;
 datesMentioned: string;
};
type categories = "task" | "Random Thought" | "Idea" | "";
