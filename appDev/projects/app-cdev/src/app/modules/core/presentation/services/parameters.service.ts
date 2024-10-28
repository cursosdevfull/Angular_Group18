import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  readonly apiUrl =
    'https://backend-cursos-dev.h7dtvegsb89r2.us-east-1.cs.amazonlightsail.com';

  readonly pageSize = 30;
}
