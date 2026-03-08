import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { DevFestEvent } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/events';

    // using HTTP Resource to fetch events with optional search query
    getEventsResource(query: Signal<string>) {
        return httpResource<DevFestEvent[]>(() => {
            const q = query();
            return q ? `${this.apiUrl}?q=${q}` : this.apiUrl;
        });
    }

    deleteEvent(id: string) {
        return this.http.delete(`${this.apiUrl}/${id}`)
    }
}