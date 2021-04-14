import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromUnixTime, getDate, getHours, getMinutes, getMonth, getSeconds, getYear } from 'date-fns';

@Injectable({
    providedIn: 'root',
})
export class DateTimeService {
    constructor(private http: HttpClient) {
    }

    public getDateTimeInfo(): Observable<IDisplayTime> {
        return this.http.get<IDateTimeInfo>('api').pipe(
            map(({unixtime, timezone}) => {
                const timestamp = fromUnixTime(unixtime);
                return {
                    month: getMonth(timestamp) + 1,
                    day: getDate(timestamp),
                    year: getYear(timestamp),
                    timeZone: String(timezone),
                    currentTime: `${getHours(timestamp)}:${getMinutes(timestamp)}:${getSeconds(timestamp)}`
                };
            })
        );
    }
}

export interface IDisplayTime {
    month: number;
    day: number;
    year: number;
    timeZone: string;
    currentTime: string;
}

interface IDateTimeInfo {
    abbreviation: string;
    client_ip: string;
    datetime: string;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: string;
    dst_offset: number;
    dst_until: string;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: string;
    utc_offset: string;
    week_number: number;
}
