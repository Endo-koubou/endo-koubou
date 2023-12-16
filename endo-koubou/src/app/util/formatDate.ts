export class DateUtils {
  static formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  static getCurrentDateFormatted(): string {
    const now = new Date();
    return this.formatDate(now);
  }

  static toYearMonthFormat(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}年${month}月`;
  }
}
