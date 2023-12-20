import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featuredTitleFormat',
})
export class FeaturedTitleFormatPipe implements PipeTransform {
  transform(title: string, maxLength: number = 20): string {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...'; // Truncate if too long
    } else {
      return title.padEnd(maxLength, ' '); // Pad with spaces if too short
    }
  }
}
