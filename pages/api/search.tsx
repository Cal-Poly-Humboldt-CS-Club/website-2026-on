import type { NextApiRequest, NextApiResponse } from 'next';
import { getEvents } from '../../lib/eventService';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query, page=1, limit=1 } = req.query;

    // We use the lib/eventService.tsx to search the events
    const { events, totalEvents } = getEvents(query as string, page as number, limit as number);

    // Return the events
    res.status(200).json({ events, totalEvents });
}