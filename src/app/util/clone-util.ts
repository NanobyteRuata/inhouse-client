export class CloneUtil {
  static clone(object: any) {
    return JSON.parse(JSON.stringify(object));
  }
}
