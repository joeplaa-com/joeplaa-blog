export default function truncateText(string: string, limit: number): string {
    if (string.length <= limit) {
        return string;
    }
    return string.slice(0, limit) + '...';
}
