export class Repository {
  private constructor() {}
  public static of() {
    return new Repository();
  }
  public fetchData(query: string) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(query);
      }, 1000);
    }).then(d => d);
  }
}
