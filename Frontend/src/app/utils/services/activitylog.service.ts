import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { ActivityLog } from '../models/activityLog';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  constructor(
    private http: HttpClient,
  ) { }

  storeActivityLog(activityLog: ActivityLog) {
    return this.http.post(API.storeActivityLogAPI, activityLog);
  }

  getActivityLogs():Observable<ActivityLog[]> {
    return this.http.get<ActivityLog[]>(API.getActivityLogsAPI);
  }
}
