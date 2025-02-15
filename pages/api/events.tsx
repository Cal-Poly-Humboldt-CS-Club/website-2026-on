import type { NextApiRequest, NextApiResponse } from 'next';
import { getEvents } from '../../lib/eventService';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Default to page 1 and limit 10, overwriten if provided
    const { page = 1, limit = 10 } = req.query; 

    // We use the lib/eventService.tsx to get the events
    const { events, totalEvents } = getEvents('', Number(page), Number(limit));

    // Return the events and totalEvents
    res.status(200).json({ events, totalEvents });
}