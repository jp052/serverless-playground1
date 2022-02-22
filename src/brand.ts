import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import axios from 'axios';

export const getBrands: APIGatewayProxyHandler = async (event, _context) => {


    //const pathParam = event.pathParameters.customParam;
    //console.log(pathParam);

    const getBrandsUrl = `https://api.bigcommerce.com/stores/xxazhvt7gd/v3/catalog/brands`;
    const headers = {
        'X-Auth-Client': 'todo', //FIXME: DO NOT COMMIT, put in config
        'X-Auth-Token': 'todo', //FIXME: DO NOT COMMIT, put in config
        'Accept': 'application/json', //previously: 'Accept': '*/*',
        'Content-Type': 'application/json'
    };

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    }

    const getBrands = async () => {
        try {
          return await axios.get(`${getBrandsUrl}`, { headers })
        } catch (error) {
          console.error(error)
          return Promise.reject(error)
          // return {
          //   Promise.reject(error)
          //   statusCode: error.response.status, //how do I return this error without processing any further code within an async call?
          //   headers: corsHeaders,         
          //   error: error.response.data
          // }
        }
      }

    const brandRequest = await getBrands();
    const brandData = brandRequest.data;
    console.log(brandData);

    return {
        statusCode: 200,
        headers: corsHeaders,         
        body: JSON.stringify({brandData})
    }
}
