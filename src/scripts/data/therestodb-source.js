/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async HomeResto() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewResto() {
    const response = await fetch(API_ENDPOINT.REVIEW);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default TheRestoDbSource;
