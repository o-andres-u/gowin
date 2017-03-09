/**
 * This class represents a place which is located on the map
 * and has a score based on users qualifications.
 */
export class Place {

  private elevation: string;

  constructor(
    private uuid: string,
    private name: string,
    private score: number,
    private latitude: string,
    private longitude: string
  ) { }

}
