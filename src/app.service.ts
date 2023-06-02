import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { AxiosError } from 'axios';

interface CurrencyRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

@Injectable()
export class AppService {
  // private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}

  // @Interval(15000)
  // async findAll(): Promise<any> {
  //   const { data } = await firstValueFrom(
  //     this.httpService
  //       .get<CurrencyRates>(
  //         'http://api.exchangeratesapi.io/v1/latest?access_key=cd0c2bb285addfc267142c7253a55ce2',
  //       )
  //       .pipe(
  //         catchError((error: AxiosError) => {
  //           console.log('Ошибка запроса: ', error.response.data);
  //           throw 'An error happened!';
  //         }),
  //       ),
  //   );

  //   console.log(data);
  //   return;
  // }
}
