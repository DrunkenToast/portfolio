import TagData from "./tag";

export default interface CardData {
    title: string,
    description: string,
    tags: TagData[],
    link: string,
    pinned: boolean,
}
