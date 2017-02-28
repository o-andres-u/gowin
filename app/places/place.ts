import {Coordinate} from "./coordinate";

/**
 * This class represents a place which is located on the map
 * and has a score based on users qualifications.
 */
export class Place {

  private coordinates: Coordinate;
  private score: number;

  constructor(coordinates: Coordinate) {
    this.coordinates = coordinates;
    this.score = 0;
  }

}
