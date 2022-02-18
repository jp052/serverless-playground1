import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import axios from 'axios';

export const handler: APIGatewayProxyHandler = async (event, _context) => {


    //const pathParam = event.pathParameters.customParam;
    //console.log(pathParam);

    const getProductUrl = `https://api.bigcommerce.com/stores/xxazhvt7gd/v3/catalog/brands/`;
    const headers = {
        'X-Auth-Client': 'todo',
        'X-Auth-Token': 'todo',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
    }



    const getBrands = async() : Promise<any> => axios.get(`${getProductUrl}`, { headers })
    .catch(e => {
        return {
          statusCode: e.response.status,
          headers: corsHeaders,         
          body: e.response.data
        }
    })
    .then(brandsResponse => {
      const brandData : any = brandsResponse.data.data
        return brandData;
    });

    const brandData = await getBrands();

    return {
        statusCode: 200,
        headers: corsHeaders,         
        body: JSON.stringify({brandData})
    }
}
